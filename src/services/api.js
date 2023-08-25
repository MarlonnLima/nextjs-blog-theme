import axios from 'axios'

export const api = axios.create({
    baseURL: "https://pvhalndetsnuagyzwocu.supabase.co/rest/v1",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2aGFsbmRldHNudWFneXp3b2N1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mjk0MDQwNiwiZXhwIjoyMDA4NTE2NDA2fQ.guUMRNXYgLEW0gF_9hXhkkvWF2XqH5NjJjMLn-B-yag",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2aGFsbmRldHNudWFneXp3b2N1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mjk0MDQwNiwiZXhwIjoyMDA4NTE2NDA2fQ.guUMRNXYgLEW0gF_9hXhkkvWF2XqH5NjJjMLn-B-yag"
    }
}) 