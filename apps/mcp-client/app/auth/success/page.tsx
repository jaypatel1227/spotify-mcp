export default function AuthSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Authentication Successful!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            You have been successfully authenticated with Spotify.
          </p>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500 text-center">
            You can now close this window and return to the application.
          </p>
        </div>
      </div>
    </div>
  );
} 