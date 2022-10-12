import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Input from "./components/Input";
import ListItem from "./components/ListItem";
import Counter from "./components/Counter";
import { Octokit } from "@octokit/core";

function App() {
  let gitCommitsData = [
    {
      sha: "6a128c11497317d4f0505d2d1fe0d2ab7604136d",
      node_id:
        "C_kwDOIIqzZtoAKDZhMTI4YzExNDk3MzE3ZDRmMDUwNWQyZDFmZTBkMmFiNzYwNDEzNmQ",
      commit: {
        author: {
          name: "Apoorv",
          email: "dixit.a.apoorv@gmail.com",
          date: "2022-10-05T16:04:52Z",
        },
        committer: {
          name: "Apoorv",
          email: "dixit.a.apoorv@gmail.com",
          date: "2022-10-05T16:04:52Z",
        },
        message: "github pages",
        tree: {
          sha: "2720a80469297e08313647b926d5aa7d95eca45d",
          url: "https://api.github.com/repos/Mr-Apoorv/userList/git/trees/2720a80469297e08313647b926d5aa7d95eca45d",
        },
        url: "https://api.github.com/repos/Mr-Apoorv/userList/git/commits/6a128c11497317d4f0505d2d1fe0d2ab7604136d",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/Mr-Apoorv/userList/commits/6a128c11497317d4f0505d2d1fe0d2ab7604136d",
      html_url:
        "https://github.com/Mr-Apoorv/userList/commit/6a128c11497317d4f0505d2d1fe0d2ab7604136d",
      comments_url:
        "https://api.github.com/repos/Mr-Apoorv/userList/commits/6a128c11497317d4f0505d2d1fe0d2ab7604136d/comments",
      author: {
        login: "Mr-Apoorv",
        id: 83874736,
        node_id: "MDQ6VXNlcjgzODc0NzM2",
        avatar_url: "https://avatars.githubusercontent.com/u/83874736?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Mr-Apoorv",
        html_url: "https://github.com/Mr-Apoorv",
        followers_url: "https://api.github.com/users/Mr-Apoorv/followers",
        following_url:
          "https://api.github.com/users/Mr-Apoorv/following{/other_user}",
        gists_url: "https://api.github.com/users/Mr-Apoorv/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Mr-Apoorv/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Mr-Apoorv/subscriptions",
        organizations_url: "https://api.github.com/users/Mr-Apoorv/orgs",
        repos_url: "https://api.github.com/users/Mr-Apoorv/repos",
        events_url: "https://api.github.com/users/Mr-Apoorv/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Mr-Apoorv/received_events",
        type: "User",
        site_admin: false,
      },
      committer: {
        login: "Mr-Apoorv",
        id: 83874736,
        node_id: "MDQ6VXNlcjgzODc0NzM2",
        avatar_url: "https://avatars.githubusercontent.com/u/83874736?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Mr-Apoorv",
        html_url: "https://github.com/Mr-Apoorv",
        followers_url: "https://api.github.com/users/Mr-Apoorv/followers",
        following_url:
          "https://api.github.com/users/Mr-Apoorv/following{/other_user}",
        gists_url: "https://api.github.com/users/Mr-Apoorv/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Mr-Apoorv/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Mr-Apoorv/subscriptions",
        organizations_url: "https://api.github.com/users/Mr-Apoorv/orgs",
        repos_url: "https://api.github.com/users/Mr-Apoorv/repos",
        events_url: "https://api.github.com/users/Mr-Apoorv/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Mr-Apoorv/received_events",
        type: "User",
        site_admin: false,
      },
      parents: [
        {
          sha: "2f74c7147443b2e711bd9d10cb23880bf489f17f",
          url: "https://api.github.com/repos/Mr-Apoorv/userList/commits/2f74c7147443b2e711bd9d10cb23880bf489f17f",
          html_url:
            "https://github.com/Mr-Apoorv/userList/commit/2f74c7147443b2e711bd9d10cb23880bf489f17f",
        },
      ],
    },
    {
      sha: "2f74c7147443b2e711bd9d10cb23880bf489f17f",
      node_id:
        "C_kwDOIIqzZtoAKDJmNzRjNzE0NzQ0M2IyZTcxMWJkOWQxMGNiMjM4ODBiZjQ4OWYxN2Y",
      commit: {
        author: {
          name: "Apoorv",
          email: "dixit.a.apoorv@gmail.com",
          date: "2022-10-05T15:31:12Z",
        },
        committer: {
          name: "Apoorv",
          email: "dixit.a.apoorv@gmail.com",
          date: "2022-10-05T15:31:12Z",
        },
        message: "Error handling added",
        tree: {
          sha: "f23867058845502a5ff554129b39f2afacc6b6fb",
          url: "https://api.github.com/repos/Mr-Apoorv/userList/git/trees/f23867058845502a5ff554129b39f2afacc6b6fb",
        },
        url: "https://api.github.com/repos/Mr-Apoorv/userList/git/commits/2f74c7147443b2e711bd9d10cb23880bf489f17f",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/Mr-Apoorv/userList/commits/2f74c7147443b2e711bd9d10cb23880bf489f17f",
      html_url:
        "https://github.com/Mr-Apoorv/userList/commit/2f74c7147443b2e711bd9d10cb23880bf489f17f",
      comments_url:
        "https://api.github.com/repos/Mr-Apoorv/userList/commits/2f74c7147443b2e711bd9d10cb23880bf489f17f/comments",
      author: {
        login: "Mr-Apoorv",
        id: 83874736,
        node_id: "MDQ6VXNlcjgzODc0NzM2",
        avatar_url: "https://avatars.githubusercontent.com/u/83874736?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Mr-Apoorv",
        html_url: "https://github.com/Mr-Apoorv",
        followers_url: "https://api.github.com/users/Mr-Apoorv/followers",
        following_url:
          "https://api.github.com/users/Mr-Apoorv/following{/other_user}",
        gists_url: "https://api.github.com/users/Mr-Apoorv/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Mr-Apoorv/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Mr-Apoorv/subscriptions",
        organizations_url: "https://api.github.com/users/Mr-Apoorv/orgs",
        repos_url: "https://api.github.com/users/Mr-Apoorv/repos",
        events_url: "https://api.github.com/users/Mr-Apoorv/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Mr-Apoorv/received_events",
        type: "User",
        site_admin: false,
      },
      committer: {
        login: "Mr-Apoorv",
        id: 83874736,
        node_id: "MDQ6VXNlcjgzODc0NzM2",
        avatar_url: "https://avatars.githubusercontent.com/u/83874736?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Mr-Apoorv",
        html_url: "https://github.com/Mr-Apoorv",
        followers_url: "https://api.github.com/users/Mr-Apoorv/followers",
        following_url:
          "https://api.github.com/users/Mr-Apoorv/following{/other_user}",
        gists_url: "https://api.github.com/users/Mr-Apoorv/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Mr-Apoorv/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Mr-Apoorv/subscriptions",
        organizations_url: "https://api.github.com/users/Mr-Apoorv/orgs",
        repos_url: "https://api.github.com/users/Mr-Apoorv/repos",
        events_url: "https://api.github.com/users/Mr-Apoorv/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Mr-Apoorv/received_events",
        type: "User",
        site_admin: false,
      },
      parents: [
        {
          sha: "57587e5b1593a8aeb4984a50b26079454ab7887b",
          url: "https://api.github.com/repos/Mr-Apoorv/userList/commits/57587e5b1593a8aeb4984a50b26079454ab7887b",
          html_url:
            "https://github.com/Mr-Apoorv/userList/commit/57587e5b1593a8aeb4984a50b26079454ab7887b",
        },
      ],
    },
  ];

  const [commitData, setCommitData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [counterSec, setCounterSec] = useState(30);
  const [showCommits, setShowCommits] = useState(false);

  const refreshButtonHandler = (counterFunction) => {
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
    setCounterSec(30);
    window.location.reload();
  };

  useEffect(() => {
    // console.log(
    //   `useeffect - refresh :: ${refresh} ::  showCommits :: ${showCommits}`
    // );
    async function fetchData() {
      // Octokit.js
      // https://github.com/octokit/core.js#readme
      const octokit = new Octokit({
        auth: localStorage.getItem("key"),
      });

      // console.log(`octokit.auth`, octokit.auth);

      let response = await octokit.request(
        "GET /repos/{owner}/{repo}/commits",
        {
          owner: "Mr-Apoorv",
          repo: "list_github_commits",
        }
      );

      let data = await response.data;
      console.log(`data from octo - `, data);
      setCommitData(data);
    }

    fetchData();

    const checkKey = () => {
      let pKey = localStorage.getItem("key");
      if (!pKey) {
        setShowCommits(false);
      } else {
        setShowCommits(true);
      }
    };

    checkKey();

    return () => {};
  }, [refresh]);

  return (
    <div>
      <NavBar />
      <Input
        setShowCommits={setShowCommits}
        refreshButtonHandler={refreshButtonHandler}
      />
      <div className="d-flex gap-2 container">
        <button
          className="btn btn-dark col-md-6"
          type="button"
          onClick={refreshButtonHandler}
        >
          Refresh now
        </button>
        <div className="text-center d-flex flex-column justify-content-center">
          <div className="d-flex">
            <strong>Page will refresh in : </strong> &nbsp;{" "}
            <Counter
              refreshButtonHandler={refreshButtonHandler}
              counterSec={counterSec}
              setCounterSec={setCounterSec}
            />
          </div>
        </div>
      </div>
      {showCommits && <ListItem gitCommitsData={commitData} />}
    </div>
  );
}

export default App;
