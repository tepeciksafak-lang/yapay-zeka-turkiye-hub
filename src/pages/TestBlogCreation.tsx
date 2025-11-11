import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createReklamYapmaBlogPost } from "@/utils/createBlogPostReklamYapma";
import { toast } from "sonner";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function TestBlogCreation() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreatePost = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log("Starting blog post creation...");
      const result = await createReklamYapmaBlogPost();
      console.log("Blog post created successfully:", result);
      
      setSuccess(true);
      toast.success("Blog-Post erfolgreich veröffentlicht!", {
        description: "Der 'Reklam Yapma' Post ist jetzt live.",
      });
    } catch (err: any) {
      console.error("Error creating blog post:", err);
      setError(err.message || "Ein Fehler ist aufgetreten");
      toast.error("Fehler beim Veröffentlichen", {
        description: err.message || "Bitte versuche es erneut.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Blog-Post Veröffentlichen</CardTitle>
          <CardDescription>
            Klicke auf den Button, um den "Reklam Yapma" Blog-Post zu erstellen und zu veröffentlichen.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleCreatePost}
            disabled={loading || success}
            className="w-full"
            size="lg"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {success && <CheckCircle2 className="mr-2 h-4 w-4" />}
            {!loading && !success && "Blog-Post Veröffentlichen"}
            {loading && "Wird veröffentlicht..."}
            {success && "Erfolgreich veröffentlicht!"}
          </Button>

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Der Blog-Post wurde erfolgreich erstellt und ist jetzt unter /tr/blog verfügbar!
              </p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                {error}
              </p>
            </div>
          )}

          {success && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.location.href = "/tr/blog"}
            >
              Zum Blog →
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
