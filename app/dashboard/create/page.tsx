import { handleSubmit } from "@/app/actions";
import { SubmitButton } from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function Create() {
  return (
    <div className="mt-15">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="font-semibold">Create Articale</CardTitle>
          <CardDescription>
            Share a new articales with your friends
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label className="font-semibold">Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-semibold">Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Body of the articale"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-semibold">Image URL</Label>
              <Input
                required
                type="url"
                placeholder="https://example/image.png"
                name="url"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
