import { useState } from "react";
import {
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
  FlatList,
  Center,
} from "native-base";
import colors from "native-base/lib/typescript/theme/base/colors";
import { ChatTeardropText, SignOut } from "phosphor-react-native";
import Logo from "../assets/logo_secondary.svg";
import { Filter } from "../components/Filter";
import { Order, OrderProps } from "../components/Order";
import { Button } from "../components/Button";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: "123456",
      patrimony: "123456789",
      when: "22/07/2022",
      status: "open",
    },
  ]);
  function handleNewOrder() {
    navigation.navigate("new");
  }
  function handleOpenDetails(orderId: string) {
    navigation.navigate("details", { orderId });
  }
  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>

          <Text color="gray.200">1</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter
            title="Em andamentoo"
            type="open"
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected === "open"}
          />
          <Filter
            title="Finalizado"
            type="close"
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected === "closed"}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Order data={item} onPress={() => handleOpenDetails(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {"\n"}
                solicitações{" "}
                {statusSelected === "open" ? "em aberto" : "finalizadas"}{" "}
              </Text>
            </Center>
          )}
        />
        <Button title="nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
