// Nye sidebarHeader component
function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <h2 className="chatbot-title">Chatbot</h2>
      <a href="/chat/new" className="new-chat-btn">
        + New
      </a>
    </div>
  );
}

// Nye sidebarFooter component
function SidebarFooter() {
  return (
    <div className="sidebar-footer">
      <a href="/profile" className="user-profile">
        <img
          src="https://ui-avatars.com/api/?name=Batman&background=0D0D0D&color=fff&size=40"
          alt="User avatar"
          className="user-avatar"
          width={30}
          height={30}
        />
        <span className="user-name">Batman</span>
      </a>
    </div>
  );
}

function ChatThreadItem(props) {
  return (
    <li className="chat-thread-item">
      <a href={props.href} className="chat-thread-link">
        {props.title}
      </a>
    </li>
  );
}

//Component til listen af chat-tråde
function ChatThreadsList(props) {
  return (
    <nav className="chat-threads-list" aria-label="Chat threads">
      <ul>
        {/* Using .map() to render each thread - consistent with messages pattern! */}
        {props.threads.map((thread) => (
          <ChatThreadItem
            key={thread.id}
            href={thread.href}
            title={thread.title}
          />
        ))}
      </ul>
    </nav>
  );
}

// Nye sidebar component
export default function Sidebar(props) {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      {/* Chat threads list */}
      <ChatThreadsList threads={props.threads} />
      {/* Using our extracted SidebarFooter component */}
      <SidebarFooter />
    </aside>
  );
}
