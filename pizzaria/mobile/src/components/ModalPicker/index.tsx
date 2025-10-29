import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import { CategoryProps } from "../../pages/Order";
import { theme } from "../../utils/theme";

interface ModalPickerProps {
  options: CategoryProps[] | any[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps | any) => void;
}

//RENOMEAR
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export function ModalPicker({
  options,
  handleCloseModal,
  selectedItem,
}: ModalPickerProps) {
  function onPressItem(item: CategoryProps | any) {
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map(
    (
      item,
      index //criar os botoes com cada categoria quando o modal abre
    ) => (
      <TouchableOpacity
        key={index}
        style={styles.option}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.item}>{item?.name}</Text>
      </TouchableOpacity>
    )
  );

  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {option.length > 0 ? (
            option
          ) : (
            <Text style={styles.emptyText}>Nenhum item encontrado</Text>
          )}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(33, 37, 41, 0.5)",
  },
  content: {
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: theme.colors.seasalt,
    borderWidth: 1,
    borderColor: theme.colors.platinum,
    borderRadius: theme.borderRadius.md,
  },
  option: {
    alignItems: "flex-start",
    borderTopWidth: 1,
    borderTopColor: theme.colors.platinum,
  },
  item: {
    margin: 18,
    fontSize: theme.fontSize.sm,
    fontWeight: "bold",
    color: theme.colors.eerieBlack,
  },
  emptyText: {
    margin: 18,
    fontSize: theme.fontSize.sm,
    fontWeight: "bold",
    color: theme.colors.slateGray,
    textAlign: "center",
  },
});
