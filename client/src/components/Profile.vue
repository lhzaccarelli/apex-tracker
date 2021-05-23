<template>
    <div>
        Profile
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "Profile",
    data() {
        return {
            loading: false,
            error: null,
            profileData: null
        }
    },
    beforeCreate() {
        document.body.className = 'body-bg-no-image'
    },
    async created() {
        this.loading = true
        try {
            const response = await axios.get(`/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`)

            this.profileData = response.data.data
            console.log(this.profileData)
            this.loading = false
        } catch (error) {
            this.loading = false
            this.error = error.response.data.message
        }
    },
}
</script>
