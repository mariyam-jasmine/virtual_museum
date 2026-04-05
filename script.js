pannellum.viewer('panorama', {

    "default": {
        "firstScene": "entrance",
        "autoLoad": true,
        "sceneFadeDuration": 1000
    },

    "scenes": {

        "entrance": {
            "title": "🏛️ Museum Entrance",
            "type": "equirectangular",
            "panorama": "images/entrance.png",

            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Enter History Room",
                    "sceneId": "history"
                }
            ]
        },

        "history": {
            "title": "🏺 History Room",
            "type": "equirectangular",
            "panorama": "images/history.png",

            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Go to Gallery Room",
                    "sceneId": "gallery"
                },
                {
                    "pitch": 0,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Back to Entrance",
                    "sceneId": "entrance"
                }
            ]
        },

        "gallery": {
            "title": "🎨 Gallery Room",
            "type": "equirectangular",
            "panorama": "images/gallery.png",

            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Go to Futuristic Room",
                    "sceneId": "future"
                },
                {
                    "pitch": 0,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Back to History Room",
                    "sceneId": "history"
                }
            ]
        },

        "future": {
            "title": "🚀 Futuristic Room",
            "type": "equirectangular",
            "panorama": "images/future.png",

            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Back to Gallery Room",
                    "sceneId": "gallery"
                }
            ]
        }

    }
});