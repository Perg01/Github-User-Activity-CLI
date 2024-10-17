<h1>GitHub Activity CLI</h1>

<p>A Node.js command line tool that fetches and displays recent GitHub activity for a specified user. It supports multiple event types (e.g., push, pull request, issue, fork) and color-codes the output for readability.</p>

<h2>Features</h2>
<ul>
  <li>Fetches recent GitHub activity using the GitHub API</li>
  <li>Supports events such as pushes, issues, pull requests, stars, and forks</li>
  <li>Displays activity with color-coded output</li>
  <li>Handles invalid usernames or API errors gracefully</li>
</ul>

<h2>Requirements</h2>
<ul>
  <li>Node.js (v12 or higher)</li>
</ul>

<h2>Installation</h2>
<pre><code>
# Clone the repository
git clone https://github.com/yourusername/github-activity-cli.git

# Navigate into the project directory

cd github-activity-cli

# Install any necessary dependencies (none for this project)

npm install
</code></pre>

<h2>Usage</h2>
<p>Run the CLI tool from the command line, providing the GitHub username as an argument:</p>
<pre><code>
node githubActivity.js &lt;GitHubUsername&gt;
</code></pre>

<p>Example:</p>
<pre><code>
node githubActivity.js octocat
</code></pre>

<h3>Sample Output:</h3>
<pre><code>
Pushed 3 commits to octocat/Hello-World
Opened opened issue in octocat/Spoon-Knife
Starred octocat/Hello-World
Forked octocat/Hello-World from another-repo
</code></pre>

<h2>Error Handling</h2>
<ul>
  <li>If the GitHub username is invalid, an error message will be displayed.</li>
  <li>If there is a network error or other issue with the request, the error is logged in the console.</li>
</ul>

<h2>Contributing</h2>
<p>Feel free to contribute by submitting a pull request or opening an issue.</p>

<h2>License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

<p>---------------------------------</p>
https://roadmap.sh/projects/github-user-activity
