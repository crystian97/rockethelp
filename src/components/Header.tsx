import { useNavigation } from "@react-navigation/native";
import {
  Heading,
  HStack,
  IconButton,
  useTheme,
  StyledProps,
} from "native-base";

import { CaretLeft } from "phosphor-react-native";
type Props = StyledProps & {
  title: string;
};

export function Header({ title, ...rest }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  const { colors } = useTheme();
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      pb={6}
      pt={12}
      bg="gray.600"
      {...rest}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />
      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}
