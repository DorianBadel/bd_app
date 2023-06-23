import { Divider, Heading } from "gestalt";

const Subtitle = (props: { title: string }) => {
  return (
    <>
      <Heading accessibilityLevel={2} size="400">
        {props.title}
      </Heading>

      <Divider />
    </>
  );
};

export default Subtitle;
