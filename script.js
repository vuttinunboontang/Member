    async function getUserProfile() {
        const profile = await liff.getProfile()
        document.getElementById("PictureUrl").src = profile.PictureUrl
        document.getElementById("userID").append(profile.userID)
        document.getElementById("statusMessage").append(profile.statusMessage)
        document.getElementById("displayName").append(profile.displayName)
        document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
    }
    async function main() {
        await liff.init({ liffId: "2000030741-2WGZeb9Z"})
        if (liff.isLoggedIn()) {
            getUserProfile()
        }
    }
    main()
