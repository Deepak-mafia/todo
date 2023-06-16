import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { addTodo, toggleTodo, deleteTodo } from './counterSlice';

const Home1 = ({ navigation }) => {

    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const handleAddTodo = () => {
        if (title === '') {
            return;
        }
        dispatch(addTodo(title));
        setTitle('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add new todo"
                    value={title}
                    onChangeText={setTitle}
                />
                <Button title="Add" onPress={handleAddTodo} />
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TodoItem
                        todo={item}
                        toggleTodo={(id) => dispatch(toggleTodo(id))}
                        deleteTodo={(id) => dispatch(deleteTodo(id))}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Home1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        marginRight: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
});