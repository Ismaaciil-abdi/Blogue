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
          <CardTitle className="font-bold text-2xl">Create Articale</CardTitle>
          <CardDescription>
            Fill out the form below to create a new article.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label className="font-semibold text-[18px]">Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-semibold text-[18px]">Content</Label>
              <Textarea
                name="content"
                required
                placeholder=" Your article content.."
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="font-semibold text-[18px]">Image URL</Label>
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
