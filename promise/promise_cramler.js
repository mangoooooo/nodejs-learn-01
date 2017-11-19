/**
 * 一个简单的http小爬虫-- promise
 */
var http = require('http')
var cheerio = require('../http/node_modules/cheerio')    //  需要npm 安装
var Promise = require('bluebird')

var baseUrl = 'http://www.imooc.com/learn/'
var url = 'http://www.imooc.com/learn/348'

function getPageAsync(url) {
    return new Promise(function (resolve, reject) {
        console.log('正在爬去：' + url)

        http.get(url, function (res) {
            var html = ''
        
            res.on('data', function (data) {
                html += data
            })
        
            res.on('end', function () {
                resolve(html)
            })
        }).on('error', function (e) {
            console.log('error')
            reject(e)
        })

    })
}

//  想一次性爬去多个课程信息，可以用promise.all()即有多个promise
var fetchCourseArr = []
var videoIds = [384,259,197]

videoIds.forEach(function (id) {
    fetchCourseArr.push(getPageAsync(baseUrl + id))
})

Promise.all(fetchCourseArr)
       .then(function (pages) {
            pages.forEach(function(html) {
                var courses = filterChapters(html)
                print(courses)
            })

       })



function filterChapters(html) {
    var $          = cheerio.load(html)
    var chapters   = $('.chapter')
    var courseData = []
    // courseData = [
    //     {
    //         chapterTitle: '',
    //         videos: [
    //             {
    //                 videoTitle: '',
    //                 videoId: 0
    //             }
    //         ]
    //     }
    // ]

    chapters.each(function (item) {
        var chapter      = $(this)
        var chapterTitle = chapter.find('strong').text()
        var videos       = chapter.find('.video').children('li')
        
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }

        videos.each(function (item) {
            var video      = $(this).find('.J-media-item')
            var videoTitle = video.text()
            var id         = video.attr('href').split('video/')[1]

            var videoData = {
                videoTitle: videoTitle,
                videoId: id,
            }

            chapterData.videos.push(videoData)
        })

        courseData.push(chapterData)
    })

    return courseData
}

function print(courseData) {
    courseData.forEach(function(item) {
        var chapterTitle = item.chapterTitle.replace(/\s/g, '');
        console.log(chapterTitle + '\n')

        item.videos.forEach(function(video) {
            console.log('  [' + video.videoId + ']  ' + video.videoTitle.replace(/\s/g, '') + '\n')
        })
    })
}