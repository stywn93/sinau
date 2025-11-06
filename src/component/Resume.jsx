import Card from "./Card";

export default function Resume() {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      <Card title={"HQM1"} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum laborum qui?"} />
      <Card title={"HQM2"} subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quae non magnam?"} />
      <Card title={"HQM3"} subtitle={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione porro exercitationem rem."} />
      <Card title={"HQM4"} subtitle={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum nihil quod!"} /> 
    </div>
  );
}
