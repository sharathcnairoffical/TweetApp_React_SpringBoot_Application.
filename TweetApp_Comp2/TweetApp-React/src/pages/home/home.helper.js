import { HttpGet, HttpPost } from "../../services/api-services";
import { BASE_URI, BASE_TWEET_URL, ALL_TWEETS, GET_USER } from "../../constants/endpoints";

export const fetchLoggedInUserDetails = async () => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let apiUrl = BASE_URI + GET_USER + localStorage.getItem("loginId");
        console.log(apiUrl)
        let headers = {
            "Authorization": credentials
        }
        let response = await HttpGet(apiUrl, {}, headers)
        // let response = {
        //     data: {
        //         "usersDto": [
        //             {
        //                 "loginId": "arunima123",
        //                 "firstName": "arunima",
        //                 "lastName": "nair",
        //                 "emailId": "arunimanair@gmail.com",
        //                 "password": "arunima1234",
        //                 "contactNumber": 7356682418,
        //                 "loggedIn": null
        //             }
        //         ]
        //     }
        // }
        return response.data.usersDto[0];
    } catch (e) {
        throw e;
    }
}

export const fetchAllTweets = async () => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let apiUrl = BASE_URI + BASE_TWEET_URL + ALL_TWEETS;
        let headers = {
            "Authorization": credentials
        }
        let response = await HttpGet(apiUrl, {}, headers)
        // let response = {
        //     data: {
        //         tweetsDto: [
        //             {
        //                 "tweet": "#HackWithInfy, the #codingcompetition for engineering students in India, is back with its fourth edition. Watch this video to know more about the opportunities it brings. Register at https://infy.com/31chPBP?twclid=11386070174013431808 #ForwardwithInfosys",
        //                 "userTweetId": "Sharath",
        //                 "tweetId": 1,
        //                 "like": 3,
        //                 "reply": [
        //                     {
        //                         "userId": "sharath123",
        //                         "replied": "hey",
        //                         "dateReplied": "2022-08-042T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "sharath123",
        //                         "replied": "Hello",
        //                         "dateReplied": "2022-08-04T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "bud",
        //                         "replied": "wow",
        //                         "dateReplied": "2022-08-04T18:30:00.000+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "08-04-2022",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "Nee poo mwone dineshaaa....!",
        //                 "userTweetId": "Neeraj",
        //                 "tweetId": 2,
        //                 "like": 0,
        //                 "reply": [
        //                     {
        //                         "userId": "nee",
        //                         "replied": "wow superb",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "nee",
        //                         "replied": "wow superb",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "nee",
        //                         "replied": "wow superb",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "04-23-2021",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "Tu hi toh janat meri",
        //                 "userTweetId": "yureka",
        //                 "tweetId": 4,
        //                 "like": 0,
        //                 "reply": [
        //                     {
        //                         "userId": "banda",
        //                         "replied": "hello",
        //                         "dateReplied": "2022-08-04T18:30:00.000+00:00"
        //                     {
        //                         "userId": "divya",
        //                         "replied": "nice",
        //                         "dateReplied": "2022-08-04T18:30:00.000+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "08-04-2022",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "Professor Greene spread his wings while he brushed six fingers over his facial hair.You're right, this does pose a problem. The simulation will grind to a halt if they keep this up. Free #scifi short story.",
        //                 "userTweetId": "Nazzer",
        //                 "tweetId": 5,
        //                 "like": 2,
        //                 "reply": [
        //                     {
        //                         "userId": "bud",
        //                         "replied": "wow",
        //                         "dateReplied": "2022-08-04T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "sow",
        //                         "replied": "how are you?",
        //                         "dateReplied": "2022-08-04T18:30:00.000+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "08-04-2022",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "If peak demand is less than the medical oxygen available in India then the bottleneck is supply & failure of supply chain. Plus failure to wargame the magnitude of the crisis & extent of demand. If East has 15,000 MT oxygen then why don't we have trains/tankers to get it to Delhi",
        //                 "userTweetId": "Sachin",
        //                 "tweetId": 6,
        //                 "like": 0,
        //                 "reply": [],
        //                 "dateOfPost": "08-04-2022",
        //                 "timeOfPost": "19:25:10"
        //             }
        //         ]
        //     }
        // }
        return response.data.tweetsDto;
    } catch (e) {
        throw e;
    }
}

export const postTweet = async (loginId, tweetMessage) => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let headers = {
            "Authorization": credentials
        }
        let apiUrl = BASE_URI + BASE_TWEET_URL + "/" + loginId + "/add" ;
        await HttpPost(apiUrl, {
            tweet: {
                tweet: tweetMessage,
            }
        }, headers)
    } catch (e) {
        throw e;
    }
}
export const postReplyTweet = async (data) => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let headers = {
            "Authorization": credentials
        }

        let apiUrl = BASE_URI + BASE_TWEET_URL + "/reply" ;
        await HttpPost(apiUrl, data, headers)
    } catch (e) {
        throw e;
    }
}

export const likeTweet = async (data) => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let headers = {
            "Authorization": credentials
        }
        let apiUrl = BASE_URI + BASE_TWEET_URL + "/like" ;
        await HttpPost(apiUrl, data, headers)
    } catch (e) {
        throw e;
    }
}

