class Github {
    constructor() {
        this.client_id = 'c804d285095c442fd7fc';
        this.client_secret = '7d759db512d80743119006e0ce980d2e9497e395';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // profile request
        const profileRespone = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // repos request
        const reposRespone = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileRespone.json();
        const repos = await reposRespone.json();
        return {
            profile,
            repos
        }
    }
}