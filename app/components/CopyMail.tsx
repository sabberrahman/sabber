"use client"
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function CopyMail() {
  const userEmail = "sabberrahman.contact@gmail.com"; // Replace with your actual email

  const copyToClipboard = (text:string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast("Email copied to clipboard!✨");
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
        toast("Error copying email. Please try again.");
      });
  };

  return (
    <Button
      variant="outline"
      onClick={() => copyToClipboard(userEmail as string)}
      className="mt-4"
    >
        <div className="gap-2 flex ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>
            <h1 className="text-gray-700 chakra"> Copy Email</h1>
            
        </div>
      

    </Button>
  );
}