import { useState } from 'react'
import './Profile.css'

export interface ProfileProps {
  onBack?: () => void
}

export interface ProfileData {
  name: string
  handle: string
  role: string
  company: string
  location: string
  email: string
  website: string
  bio: string
  stats: {
    repos: number
    contributions: string
    stars: number
    followers: number
  }
  skills: string[]
}

const defaultProfile: ProfileData = {
  name: 'Tejas Prabhu',
  handle: '@tejaspr',
  role: 'AI & Systems Software Engineer',
  company: 'Antigravity Labs',
  location: 'San Francisco, CA',
  email: 'tejas@example.dev',
  website: 'https://github.com/Tejas-pr',
  bio: 'Building intelligent developer tools, autonomous coding agents, and high-performance distributed web applications.',
  stats: {
    repos: 48,
    contributions: '1,840+',
    stars: 342,
    followers: 890,
  },
  skills: [
    'React',
    'TypeScript',
    'Python',
    'FastAPI',
    'Vite',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'LangGraph',
    'Tailwind CSS',
  ],
}

interface ProjectItem {
  title: string
  description: string
  stars: number
  forks: number
  language: string
  languageColor: string
}

const sampleProjects: ProjectItem[] = [
  {
    title: 'ai-software-engineer',
    description: 'Autonomous multi-agent system that plans, writes, tests, and raises pull requests for GitHub issues.',
    stars: 182,
    forks: 34,
    language: 'Python',
    languageColor: '#3572A5',
  },
  {
    title: 'developer-workspace-ui',
    description: 'Modern developer cockpit with live terminal streams, file tree navigation, and diff inspectors.',
    stars: 95,
    forks: 18,
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    title: 'agentic-task-orchestrator',
    description: 'Distributed graph-based agent runtime with durable checkpoints and human-in-the-loop approvals.',
    stars: 65,
    forks: 12,
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
]

export function Profile({ onBack }: ProfileProps) {
  const [profile] = useState<ProfileData>(defaultProfile)
  const [copied, setCopied] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'projects'>('overview')

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="profile-container">
      {/* Top Navigation */}
      <nav className="profile-nav">
        {onBack ? (
          <button type="button" className="profile-back-btn" onClick={onBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        ) : (
          <div></div>
        )}
        <div className="profile-nav-actions">
          <button
            type="button"
            className={`profile-action-btn ${isFollowing ? 'following' : ''}`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? '✓ Following' : '+ Follow'}
          </button>
        </div>
      </nav>

      {/* Profile Card */}
      <div className="profile-card">
        {/* Banner */}
        <div className="profile-banner">
          <div className="banner-grid-pattern"></div>
        </div>

        {/* Header with Avatar and Key Info */}
        <div className="profile-header-wrap">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="50" fill="url(#avatarGrad)" />
                <circle cx="50" cy="40" r="18" fill="rgba(255,255,255,0.92)" />
                <path d="M22 84 C22 66, 36 58, 50 58 C64 58, 78 66, 78 84 Z" fill="rgba(255,255,255,0.92)" />
              </svg>
            </div>
            <span className="profile-status-badge" title="Active now"></span>
          </div>

          <div className="profile-headline">
            <div className="profile-title-row">
              <h1 className="profile-name">{profile.name}</h1>
              <span className="profile-handle">{profile.handle}</span>
            </div>
            <p className="profile-role">
              {profile.role} · <span className="profile-company">{profile.company}</span>
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="profile-bio">{profile.bio}</p>

        {/* Meta Badges */}
        <div className="profile-meta-row">
          <span className="profile-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </span>
          <a
            href={profile.website}
            target="_blank"
            rel="noreferrer"
            className="profile-meta-item profile-meta-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            github.com/Tejas-pr
          </a>
          <button type="button" className="profile-meta-item profile-email-btn" onClick={handleCopyEmail}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {profile.email}
            <span className="copy-tag">{copied ? 'Copied! ✓' : 'Copy'}</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="profile-stats-grid">
          <div className="profile-stat-box">
            <span className="stat-number">{profile.stats.repos}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="profile-stat-box">
            <span className="stat-number">{profile.stats.contributions}</span>
            <span className="stat-label">Contributions</span>
          </div>
          <div className="profile-stat-box">
            <span className="stat-number">{profile.stats.stars}</span>
            <span className="stat-label">Stars Earned</span>
          </div>
          <div className="profile-stat-box">
            <span className="stat-number">{profile.stats.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            type="button"
            className={`profile-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview & Skills
          </button>
          <button
            type="button"
            className={`profile-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Featured Projects ({sampleProjects.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' ? (
          <div className="profile-tab-content">
            <div className="skills-section">
              <h2 className="section-title">Core Technologies & Tools</h2>
              <div className="skills-tags">
                {profile.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="activity-card">
              <h2 className="section-title">Recent Activity</h2>
              <div className="activity-item">
                <span className="activity-dot"></span>
                <div className="activity-body">
                  <p className="activity-text">
                    Shipped updates to <strong>Tejas-pr/dummy-repo</strong>
                  </p>
                  <span className="activity-time">Earlier today</span>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-dot"></span>
                <div className="activity-body">
                  <p className="activity-text">
                    Implemented Profile page component with responsive layout and theme tokens
                  </p>
                  <span className="activity-time">Just now</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-tab-content">
            <div className="projects-grid">
              {sampleProjects.map((project) => (
                <div key={project.title} className="project-card">
                  <div className="project-card-header">
                    <svg className="project-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    <span className="project-title">{project.title}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-footer">
                    <span className="project-lang">
                      <span className="lang-color" style={{ backgroundColor: project.languageColor }}></span>
                      {project.language}
                    </span>
                    <span className="project-stat">⭐ {project.stars}</span>
                    <span className="project-stat">🍴 {project.forks}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
