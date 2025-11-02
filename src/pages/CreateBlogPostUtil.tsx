import { useEffect, useState } from "react";
import { createSalesAIBlogPost } from "@/scripts/createSalesAIPost";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CreateBlogPostUtil() {
  const [status, setStatus] = useState<"idle" | "creating" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    setStatus("creating");
    setMessage("Blog-Post wird erstellt...");
    
    try {
      const result = await createSalesAIBlogPost();
      setStatus("success");
      setMessage(`Blog-Post erfolgreich erstellt! Slug: ${result.slug}`);
      
      // Navigate to the blog post after 2 seconds
      setTimeout(() => {
        navigate(`/tr/blog/${result.slug}`);
      }, 2000);
    } catch (error) {
      setStatus("error");
      setMessage(`Fehler: ${error instanceof Error ? error.message : String(error)}`);
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Blog-Post Erstellen</h1>
        
        <div className="p-6 border rounded-lg space-y-4">
          <p className="text-muted-foreground">
            Klicken Sie auf den Button, um den Sales AI Blog-Post zu erstellen.
          </p>
          
          <Button 
            onClick={handleCreate} 
            disabled={status === "creating"}
            size="lg"
          >
            {status === "creating" ? "Erstellt..." : "Blog-Post Erstellen"}
          </Button>
          
          {message && (
            <div className={`p-4 rounded-lg ${
              status === "success" ? "bg-green-500/10 text-green-500" :
              status === "error" ? "bg-red-500/10 text-red-500" :
              "bg-blue-500/10 text-blue-500"
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
