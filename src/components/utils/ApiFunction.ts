import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

export async function addRoom(photo: Blob, roomType: string, roomPrice: string) {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);

    const response = await api.post("/rooms/add/new-room", formData);
    if (response.status === 200) {
        console.log(response);
        return true;
    }
    return false;
}

export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room-types");
        return response.data;
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}