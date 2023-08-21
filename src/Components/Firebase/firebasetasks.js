import { set, ref, push , get , update } from 'firebase/database';
import { db } from '../header/firebase';

export class Firebasetasks
{
    async addpost(postText ,selectedImage , userId)
    {
        try {

          
            const newPostRef = push(ref(db, 'posts')); 
            const postKey = newPostRef.key;
      
            // Construct the post object with required data
            const post = {
              postText,
              favorite: false, // Initial favorite value
              userId: userId,
              img:selectedImage.name,
            
            };
      
            // Set the post data in the database
            await set(newPostRef, post);
      
            console.log('Post uploaded successfully:', post);
          } catch (error) {
            console.error('Error uploading post:', error);
          }
    }

    async allposts()
    {
        try {
            const postsRef = ref(db, 'posts');
            const snapshot = await get(postsRef);
      
            if (snapshot.exists()) {
              const postsData = snapshot.val();
              const postsArray = Object.keys(postsData).map((key) => ({
                id: key,
                ...postsData[key],
              }));
              console.log(postsArray);
              return postsArray;
            } else {
              return [];
            }
          } catch (error) {
            console.error('Error fetching all posts:', error);
            return [];
          }
    }

    async getmypost(userId)
    {
        try {
            const postsRef = ref(db, 'posts');
        
            // Get all posts
            const snapshot = await get(postsRef);
        
            if (snapshot.exists()) {
              const postsData = snapshot.val();
              const postsArray = Object.keys(postsData)
                .map((key) => ({
                  id: key,
                  ...postsData[key],
                }))
                .filter((post) => post.userId === userId) // Filter by user ID
                .sort((a, b) => b.timestamp - a.timestamp); // Sort posts by timestamp in descending order
        console.log(postsArray);
              return postsArray;
            } else {
              return [];
            }
          } catch (error) {
            console.error('Error fetching posts for user:', error);
            return [];
          }
    }


    async makefavourite(userId, postId) {
        try {
          // Reference to the specific post using postId
          const postRef = ref(db, `posts/${postId}`);
    
          // Get the current value of the favorite attribute
          const snapshot = await get(postRef);
          const currentFavorite = snapshot.val().favorite;
    
          // Toggle the favorite attribute
          await update(postRef, { favorite: !currentFavorite });
    
          console.log(`Post ${postId} marked as favorite by user ${userId}`);
        } catch (error) {
          console.error('Error marking post as favorite:', error);
        }
      }
}