import React, { useState } from "react";
import { FloatingMenu } from "react-native-floating-action-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressCard, faHome, faUsers, faCalendar, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const MiniMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(props.event);
  const handleMenuToggle = (value) => setIsMenuOpen(value);
  // const handleItemPress = (item, index) => console.log("pressed item", item);
  const handleItemPress = (item, index) => handleMenuToggle(!isMenuOpen);

  //   <FontAwesomeIcon icon={faEnvelope} color={"white"} size={20} />

  const items = [
    {
      label: "Community",
      // labelStyle: "backgroundColor: #ffffff",
      onPress: (item, index) => {
        props.navigation.navigate("LogIn");
      },
      fa: faUsers,
    },
    {
      label: "Menu",
      onPress: (item, index) => {
        props.navigation.navigate("Events");
      },
      fa: faCalendar,
    },
    {
      label: "Profile",
      onPress: (item, index) => {
        props.navigation.navigate("LogIn");
      },
      fa: faAddressCard,
    },
    {
      label: "Home",
      onPress: (item, index) => {
        props.navigation.navigate("Menu");
      },
      fa: faHome,
    },
  ];

  const renderMenuIcon = menuState => {
    const activeColor = '#999';
    // const activeColor = '#DE411B';
    const {menuButtonDown} = menuState;

    return (
      <FontAwesomeIcon
        color={menuButtonDown ? '#fff' : activeColor}
        icon={isMenuOpen ? faTimes : faBars}
        size={23}
      />
    );
  };

  const renderItemIcon = (item, index, menuState) => {
    const { itemsDown, dimmerActive } = menuState;

    const primaryColor = '#DE411B';
    const isItemPressed = itemsDown[index];
    const color = isItemPressed ? "#fff" : primaryColor;

    if (item.fa) {
      return <FontAwesomeIcon icon={item.fa} size={25} color={color} />;
    } else if (item.image) {
      return <Image source={item.image} style={{ tintColor: color }} resizeMode="contain" />;
    }

    return null;
  };

  return (
    <FloatingMenu
      items={items}
      isOpen={isMenuOpen}
      onMenuToggle={handleMenuToggle}
      onItemPress={handleItemPress}
      position="top-right"
      renderItemIcon={renderItemIcon}
      renderMenuIcon={renderMenuIcon}
      borderColor="#00000000"
      backgroundColor="#DE411B"
      iconColor="#DE411B"
    />
  );
};

export default MiniMenu;
