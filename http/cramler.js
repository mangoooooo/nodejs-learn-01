/**
 * 一个简单的http小爬虫
 */
var http = require('http')
var cheerio = require('cheerio')    //  需要npm 安装
var url = 'http://www.imooc.com/learn/348'

http.get(url, function (res) {
    var html = ''

    res.on('data', function (data) {
        html += data
    })

    res.on('end', function () {
        // console.log(html)
        var courseData = filterChapters(html)
        print(courseData)
    })
}).on('error', function () {
    console.log('error')
})

function filterChapters(html) {
    var $          = cheerio.load(html)
    var chapters   = $('.chapter')
    var courseData = []

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