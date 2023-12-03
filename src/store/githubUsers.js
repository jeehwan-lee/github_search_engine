import axios from "axios";
import create from "zustand";

export const userGithubUsersStore = create((set) => ({
  users: [],
  totalCount: 0,
  loading: false,
  searchUsers: async (q, page = 1) => {
    set({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search?q=${q}&per_page=20&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    set({
      loading: false,
      users: res.data.items,
      totalCount: res.data.total_count,
    });
  },
}));
