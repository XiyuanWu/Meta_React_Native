import * as React from 'react';
import { SectionList, Text, View, ScrollView } from 'react-native';
// import { Pressable, SectionList, Text, View, ScrollView } from 'react-native';

// Data code share Part 2B, 3, 4
type MenuItem = {
    name: string;
    price: string;
    id?: string;
};

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

// Part 4 code(Navigation)
const Item = ({ name, price }: { name: string, price: string }) => (
    <View style={{ backgroundColor: "#F4CE14", margin: 10, padding: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 17, color: "black", fontWeight: "semibold" }}>{name}</Text>
        <Text style={{ fontSize: 17, color: "black", fontWeight: "semibold" }}>{price}</Text>
    </View>
);


export default function MenuItemSectionList() {

    const renderItem = ({ item }: { item: MenuItem }) => <Item name={item.name} price={item.price} />;
    const renderSectionHeader = ({ section }: { section: { title: string } }) => <Text style={{ fontSize: 22, color: "white", fontWeight: "semibold", textAlign: "center", marginTop: 20 }}>{section.title}</Text>;

    return (
        <ScrollView>
            <View style={{ marginBottom: 30 }}>
                <Text style={{ fontSize: 30, textAlign: "center", color: "white", marginTop: 40, fontWeight: "semibold" }}>View Menu</Text>
                <SectionList sections={menuItemsToDisplay} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
            </View>
        </ScrollView>
    );
}

// Part 3 code(Pressable)
// const Item = ({ name, price }: { name: string, price: string }) => (
//     <View style={{ backgroundColor: "#F4CE14", margin: 10, padding: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
//         <Text style={{ fontSize: 17, color: "black", fontWeight: "semibold" }}>{name}</Text>
//         <Text style={{ fontSize: 17, color: "black", fontWeight: "semibold" }}>{price}</Text>
//     </View>
// );


// export default function MenuItemSectionList() {

//     const [showMenu, setShowMenu] = React.useState(false);

//     const renderItem = ({ item }: { item: MenuItem }) => <Item name={item.name} price={item.price} />;
//     const renderSectionHeader = ({ section }: { section: { title: string } }) => <Text style={{ fontSize: 22, color: "white", fontWeight: "semibold", textAlign: "center", marginTop: 20 }}>{section.title}</Text>;

//     return (
//         <View>
//             <Pressable onPress={() => setShowMenu(prevState => !prevState)} style={{ backgroundColor: "#F4CE14", marginHorizontal: 50, borderRadius: 10, marginVertical: 40, padding: 10 }}>
//                 <Text style={{ fontSize: 30, textAlign: "center", color: "white", fontWeight: "semibold" }}>
//                     {showMenu ? "Home" : "View Menu"}
//                 </Text>
//             </Pressable>
//             {showMenu && (
//                 <SectionList sections={menuItemsToDisplay} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
//             )}
//         </View>
//     );
// }





// Part 2B code(SectionList)
// const Item = ({ name, price }: { name: string, price: string }) => (
//     <View style={{ backgroundColor: "#F4CE14", margin: 10, padding: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
//         <Text style={{ fontSize: 17, color: "black", fontWeight: "semibold" }}>{name}</Text>
//         <Text style={{ fontSize: 17, color: "black", fontWeight: "semibold" }}>{price}</Text>
//     </View>
// );


// export default function MenuItemSectionList() {

//     const renderItem = ({ item }: { item: MenuItem }) => <Item name={item.name} price={item.price} />;
//     const renderSectionHeader = ({ section }: { section: { title: string } }) => <Text style={{ fontSize: 22, color: "white", fontWeight: "semibold", textAlign: "center", marginTop: 20 }}>{section.title}</Text>;

//     return (
//         <View style={{ marginBottom: 30 }}>
//             <Text style={{ fontSize: 30, textAlign: "center", color: "white", marginTop: 40, fontWeight: "semibold" }}>View Menu</Text>
//             <SectionList sections={menuItemsToDisplay} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
//         </View>
//     );
// }





// Part 2A code(FlatList)
// type MenuItem = {
//     name: string;
//     price: string;
//     id: string;
// };

// const menuItemsToDisplay = [
//     { name: 'Hummus', price: '$5.00', id: '1A' },
//     { name: 'Moutabal', price: '$5.00', id: '2B' },
//     { name: 'Falafel', price: '$7.50', id: '3C' },
//     { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//     { name: 'Kofta', price: '$5.00', id: '5E' },
//     { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//     { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//     { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//     { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//     { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//     { name: 'Fries', price: '$3.00', id: '11K' },
//     { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//     { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//     { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//     { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//     { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//     { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//     { name: 'Baklava', price: '$3.00', id: '18S' },
//     { name: 'Tartufo', price: '$3.00', id: '19T' },
//     { name: 'Tiramisu', price: '$5.00', id: '20U' },
//     { name: 'Panna Cotta', price: '$5.00', id: '21V' },
// ];

// const Item = ({ name, price }: { name: string, price: string }) => (
//     <View style={{ backgroundColor: "#F4CE14", margin: 10, padding: 10, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
//         <Text style={{ fontSize: 20, color: "black", fontWeight: "semibold" }}>{name}</Text>
//         <Text style={{ fontSize: 20, color: "black", fontWeight: "semibold" }}>{price}</Text>
//     </View>
// );

// export default function MenuItemList() {
//     const renderItem = ({ item }: { item: MenuItem }) => <Item name={item.name} price={item.price} />;

//     return (
//         <View style={{ marginBottom: 30 }}>
//             <Text style={{ fontSize: 30, textAlign: "center", color: "white", marginTop: 40, fontWeight: "semibold" }}>View Menu</Text>
//             <FlatList data={menuItemsToDisplay} keyExtractor={item => item.id} renderItem={renderItem} />
//         </View>
//     );
// }







// Part 1 code
// const menuItemsToDisplay = [
//     'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
// ];

// export default function MenuItem() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>
//                 View Menu
//             </Text>
//             <ScrollView style={styles.menuItems}>
//                 <Text style={styles.menuItem}>
//                     {menuItemsToDisplay}
//                 </Text>
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginBottom: 30,
//     },
//     title: {
//         fontSize: 30,
//         textAlign: 'center',
//         marginTop: 20,
//         color: 'white',
//         fontWeight: "semibold",
//     },
//     menuItem: {
//         fontSize: 16,
//         textAlign: 'center',
//         marginTop: 20,
//         color: 'white',
//     },
//     menuItems: {
//         marginHorizontal: 20,
//     },
// });