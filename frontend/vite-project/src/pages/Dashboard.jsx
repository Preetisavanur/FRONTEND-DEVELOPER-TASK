import { useEffect, useState } from "react";
import API from "../api";
import "./Dashboard.css";

export default function Dashboard() {
  // ================= STATE =================
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // ================= FETCH TASKS =================
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // ================= FETCH PROFILE =================
  const fetchProfile = async () => {
    try {
      const res = await API.get("/auth/profile");
      setUser(res.data);
      // Store user in local storage for Layout to access if needed, or use Context
      localStorage.setItem('user', JSON.stringify(res.data));
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  // ================= LOAD DATA =================
  useEffect(() => {
    fetchTasks();
    fetchProfile();
  }, []);

  // ================= CREATE TASK =================
  const handleCreate = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      await API.post("/tasks", { title, description });
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  // ================= TOGGLE STATUS =================
  const toggleStatus = async (task) => {
    try {
      await API.put(`/tasks/${task._id}`, {
        status: task.status === "pending" ? "completed" : "pending",
      });
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  // ================= DELETE TASK =================
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  // ================= FILTERED TASKS =================
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) =>
      filter === "all" ? true : task.status === filter
    );

  // ================= UI =================
  return (
    <div className="dashboard-container">
      <div className="dashboard-header welcome-section">
        <div>
          <h1>Dashboard</h1>
          {user && <p>Welcome back, {user.name}!</p>}
        </div>
      </div>

      <div className="controls-section">
        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="text"
          placeholder="Search tasks..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form onSubmit={handleCreate} className="create-task-form">
        <input
          type="text"
          placeholder="Task title"
          className="search-input" /* reusing input style */
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description (optional)"
          className="search-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary">
          <span style={{ marginRight: '0.5rem' }}>+</span> Add Task
        </button>
      </form>

      <div className="task-grid">
        {filteredTasks.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
            No tasks found matching your criteria.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div key={task._id} className="task-card">
              <div>
                <div className="task-header">
                  <h3 className="task-title">{task.title}</h3>
                  <span className={`task-status status-${task.status}`}>
                    {task.status}
                  </span>
                </div>
                <p className="task-desc">{task.description || "No description provided."}</p>
              </div>

              <div className="task-actions">
                <button
                  onClick={() => toggleStatus(task)}
                  className={`btn btn-outline`}
                  style={{ flex: 1 }}
                >
                  {task.status === "pending" ? "Mark Done" : "Mark Pending"}
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
