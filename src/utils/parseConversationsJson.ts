/**
 * Parses a ChatGPT conversations.json export and extracts only user messages.
 * The JSON structure is an array of conversation objects, each with a `mapping`
 * object (DAG of message nodes).
 */
export function parseConversationsJson(rawJson: string): string {
  try {
    const conversations = JSON.parse(rawJson);

    if (!Array.isArray(conversations)) {
      throw new Error("Geçersiz format: JSON bir dizi (array) olmalıdır.");
    }

    const userMessages: string[] = [];

    for (const conversation of conversations) {
      if (!conversation.mapping || typeof conversation.mapping !== "object") {
        continue;
      }

      for (const node of Object.values(conversation.mapping) as any[]) {
        if (
          node?.message &&
          node.message.author?.role === "user" &&
          node.message.content?.parts
        ) {
          const text = node.message.content.parts
            .filter((part: unknown) => typeof part === "string")
            .join("\n");

          if (text.trim()) {
            userMessages.push(text.trim());
          }
        }
      }
    }

    if (userMessages.length === 0) {
      throw new Error(
        "Hiç kullanıcı mesajı bulunamadı. Dosyanın doğru formatta olduğundan emin olun."
      );
    }

    return userMessages.join("\n\n");
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        "Geçersiz JSON dosyası. Lütfen ChatGPT'den indirdiğiniz conversations.json dosyasını yükleyin."
      );
    }
    throw error;
  }
}
