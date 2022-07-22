import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";
type ButtonType = IButtonProps & {
  title: string;
};
export function Button({ title, ...rest }: ButtonType) {
  return (
    <ButtonNativeBase
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Heading color="gray.100">{title}</Heading>
    </ButtonNativeBase>
  );
}
