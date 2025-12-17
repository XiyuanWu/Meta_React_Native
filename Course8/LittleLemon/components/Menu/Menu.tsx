import * as React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuItems from "../../assets/data/MenuItem";
import MenuItem from "./MenuItem";

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

    // Get all unique categories
    const categories = React.useMemo(() => {
        const uniqueCategories = Array.from(new Set(MenuItems.map(item => item.category)));
        return uniqueCategories.filter(Boolean) as string[];
    }, []);

    // Filter items based on selected category
    const filteredItems = React.useMemo(() => {
        if (!selectedCategory) {
            return MenuItems;
        }
        return MenuItems.filter(item => item.category === selectedCategory);
    }, [selectedCategory]);

    // Group filtered items by category
    const groupedItems = React.useMemo(() => {
        return filteredItems.reduce((acc, item) => {
            const category = item.category || "Other";
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {} as Record<string, typeof MenuItems>);
    }, [filteredItems]);

    return (
        <>
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        ORDER FOR DELIVERY!
                    </Text>
                </View>

                {/* Category Filter Buttons */}
                <View style={styles.filterContainer}>
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.filterScrollContent}
                    >
                        <TouchableOpacity
                            style={[
                                styles.filterButton,
                                selectedCategory === null && styles.filterButtonActive
                            ]}
                            onPress={() => setSelectedCategory(null)}
                        >
                            <Text style={[
                                styles.filterButtonText,
                                selectedCategory === null && styles.filterButtonTextActive
                            ]}>
                                All
                            </Text>
                        </TouchableOpacity>
                        {categories.map((category) => (
                            <TouchableOpacity
                                key={category}
                                style={[
                                    styles.filterButton,
                                    selectedCategory === category && styles.filterButtonActive
                                ]}
                                onPress={() => setSelectedCategory(category)}
                            >
                                <Text style={[
                                    styles.filterButtonText,
                                    selectedCategory === category && styles.filterButtonTextActive
                                ]}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {Object.entries(groupedItems).map(([category, items]) => (
                    <View key={category} style={styles.categorySection}>
                        {!selectedCategory && (
                            <Text style={styles.categoryTitle}>{category}</Text>
                        )}
                        {items.map((item, index) => (
                            <MenuItem
                                key={`${category}-${index}`}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </View>
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        backgroundColor: "white",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
        paddingLeft: 20,
        marginBottom: 20,
    },
    filterContainer: {
        marginBottom: 20,
        paddingLeft: 20,
    },
    filterScrollContent: {
        paddingRight: 20,
        gap: 12,
    },
    filterButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    filterButtonActive: {
        backgroundColor: "#333",
        borderColor: "#333",
    },
    filterButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#666",
    },
    filterButtonTextActive: {
        color: "#fff",
    },
    categorySection: {
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 23,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
        color: "#333",
    },
});