import axios from "axios";
const url = 'http://localhost:5000/journals';

export default class API {
    // to get all the posts from the server
    static async getAllPosts(){
        const res = await axios.get(url);
        return res.data;
    }
    // to get single post by id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    static async getJournalsByDate(date){
        const res = await axios.get(`${url}/date/${date}`);
        return res.data;
    }

    // to insert post into database
    static async saveJournal(journal){
        const res = await axios.post(url, journal);
        return res.data;
    }

    // to update post into database
    static async updateJournal(id, journal){
        const res = await axios.patch(`${url}/${id}`, journal);
        return res.data;
    }
    // to delete a post
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}