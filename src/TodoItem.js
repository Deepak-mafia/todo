import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    const handleToggle = () => {
        toggleTodo(todo.id);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ flex: 1, }} onPress={handleToggle}>
                    {todo.completed ?
                        <Fontisto name={"checkbox-active"} size={20} color={"green"} />
                        :
                        <Fontisto name={"checkbox-passive"} size={20} color={"red"} />}
                </TouchableOpacity>
                <View style={{ flex: 7 }}>
                    <Text style={todo.completed ? styles.completedText : styles.text}>
                        {todo.title}
                    </Text>
                </View>
                <TouchableOpacity style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} onPress={handleDelete}>
                    <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5
    },
    text: {
        fontSize: 16,
    },
    completedText: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: '#ccc',
    },
    deleteButton: {
        color: 'red',
    },
});

export default TodoItem;
