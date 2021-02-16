import ImageUploader from '../components/ImageUploader'

const Profile = () => {
  return (
    <section className="bg-white dark:bg-gray-800 w-full min-h-screen p-6">
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col  px-10 py-8 m-6  bg-gray-300 dark:bg-gray-700 rounded-3xl min-w-max h-full ">
          <div className="h-full w-full rounded-3xl bg-white dark:bg-gray-800 p-4">
            
            <ImageUploader />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
