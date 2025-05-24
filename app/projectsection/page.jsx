import { HyperText } from "@/components/magicui/hyper-text";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export default function ProjectSection() {
  return (
    <div id="projectsection">
      <HyperText className="text-center font-mono ">Projects</HyperText>

      <div className="flex justify-evenly">
        <Card className="py-4 bg-gray-400 max-w-fit rounded-lg m-10 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Foodies</p>
            <small className="text-default-500 font-bold">
              A Resturant Landing Page{" "}
            </small>
            <h4 className="font-mono  text-large">React+JS+Tailwind</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <img
              alt="Card background"
              className="object-cover rounded-xl"
              src="images/1.png"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 bg-gray-400 max-w-fit rounded-lg m-10 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">UniqueLust</p>
            <small className="text-default-500 font-bold">
              A Hotel Booking {" "}
            </small>
            <h4 className="font-mono  text-large">Express + Node + EJS</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <img
              alt="Card background"
              className="object-cover rounded-xl"
              src="images/2.png"
              width={270}
            />
          </CardBody>
        </Card>
        <Card className="py-4 bg-gray-400 max-w-fit rounded-lg m-10 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Foodies</p>
            <small className="text-default-500 font-bold">
              A Resturant Landing Page{" "}
            </small>
            <h4 className="font-mono  text-large">React+JS+Tailwind</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <img
              alt="Card background"
              className="object-cover rounded-xl"
              src="images/1.png"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
