class Github {
    constructor() {
        this.client_id = 'c804d285095c442fd7fc';
        this.client_secret = '7d759db512d80743119006e0ce980d2e9497e395';
    }

    async getUser(user) {
        const profileRespone = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileRespone.json();

        return {
            profile
        }
    }
}