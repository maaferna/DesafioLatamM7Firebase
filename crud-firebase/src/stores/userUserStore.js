import { defineStore } from 'pinia';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseconfig";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(this.users);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    },
    async addUser(newUser) {
      try {
        const docRef = await addDoc(collection(db, "users"), newUser);
        this.users.push({ id: docRef.id, ...newUser });
      } catch (error) {
        console.error("Error adding user: ", error);
      }
    },
    async deleteUser(id) {
      try {
        await deleteDoc(doc(db, "users", id));
        this.users = this.users.filter((user) => user.id !== id);
      } catch (error) {
        console.error("Error deleting user: ", error);
      }
    },
  },
});
