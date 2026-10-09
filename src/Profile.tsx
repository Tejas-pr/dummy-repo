import './Profile.css'

interface ProfileData {
  name: string
  email: string
  bio: string
}

const profileData: ProfileData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Full-stack developer passionate about building modern web applications with React and TypeScript.'
}

export function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-content">
        <div className="profile-header">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile picture" 
            className="profile-image"
          />
          <h2 className="profile-name">{profileData.name}</h2>
        </div>
        <div className="profile-info">
          <p className="profile-email">
            <span className="label">Email:</span> {profileData.email}
          </p>
          <p className="profile-bio">
            <span className="label">Bio:</span> {profileData.bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
