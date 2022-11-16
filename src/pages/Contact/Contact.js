import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function Contact() {
  return (
    <>
    <h1 class="send-message">Send me a message!</h1>
      <div className="w-72" id="input">
        <Input size="lg" color="green" label="Name:" />
      </div>
      <div className="w-72" id="input">
        <Input size="lg" color="green" label="Email Address:" />
      </div>
      <div className="w-96" id="message">
        <Textarea size="lg" color="green" label="Message:" />
      </div>
      <div class='button'>
      <Button size="sm" color="green">Submit</Button>
      </div>
    </>
  );
}
