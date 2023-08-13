---
title: 'Small Drone - Tiny screws!'
excerpt: 'A couple of weeks ago I had a little mishap with my drone, a DJI Min 2. I was filming a diving tower and got a bit to focused on framing the perfect shot and and did not see a tree standing in the drones way. A had a bit of luck and the drone landed on a small island just a few meter from the shoreline - of course not the same shoreline a was standing on. '
coverImage: '/assets/blog/small-drone-tiny-screws/cover.jpg'
date: '2023-08-13'
tags:
    - "Drone"
    - "Repair"

---
A couple of weeks ago I had a little mishap with my drone, a DJI Min 2. I was filming a diving tower and got a bit to focused on framing the perfect shot and and did not see a tree standing in the drones way. A had a bit of luck and the drone landed on a small island just a few meter from the shoreline - of course not the same shoreline a was standing on. 

After a bit of a rescue mission that included a pedal boat I finally had the drone in my hands and could inspect the damage.

At first glance I could see that the camera and gimbal had taken a pretty good hit, however it looked like the only thing broken was the front protective glass for the camera.

![Broken front glass!](/assets/blog/small-drone-tiny-screws/broken-drone1.jpg "Broken Drone")

On closer inspection of the drone I could confirm that the damages was a bit more extensive. The gimbal motor was not working as it should and on further disassembly I noticed that the gimbal arm was cracked and was falling appart. 

After some web searching I found a place that had a complete gimbal assembly complete with camera for a reasonable price so I ordered that.

After about a week the new part arrived in the mail, now began the rescue operation! 

![Broken front glass!](/assets/blog/small-drone-tiny-screws/new-gimbal.jpg "New Gimbal")

The drone was fairly easy to take apart, but man those screws are small. With a little help from some youtube videos the drone was taken apart and put together again within an hour or so.

When powering up the drone again after its surgery I could confirm that the gimbal and camera was now working again. However, I now had a couple of IMU Errors showing up and the gimbal view was crooked. None of the built in calibrations worked...

After some searching around on the web I found a tool that could help me. Its called DJI-Firmware-tool and is a python tool that can help with various service things on DJI Drones. This tool had a script that could perform gimbal calibration.

After some struggle to get a serial connection to the drone I finally was able to run the calibration script.

The gimbal is now straight but the IMU Data Error is still there. The drone seems to be working fine anyway (except an annoying error)

The error it self seems to be due to some kind of serial missmatch. Maybe I will keep struggling to remove that error or maybe I wont. At least the drone is operational again.