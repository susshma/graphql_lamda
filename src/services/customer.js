app.get('/dj',(req, res)=>{
 // Insert into DJs Collection
    var dealJacket = new DealJacket({
        dealJacketId: 1,
        customer: req.body.item,
        dealStatus: 'Created'
    });

    dealJacket.save((err, result)=> {
        if (err) {
            console.log("---TodoItem save failed " + err)
        }
        console.log("+++TodoItem saved successfully "+dealJacket.item)
        res.redirect('/')
    });
});

app.post('/dealJackets',(req, res)=>{
 // Insert into DJs Collection
    var dealJacket = new DealJacket({
        dealJacketId: 1,
        customer: req.body.item,
        dealStatus: 'Created'
    });

    dealJacket.save((err, result)=> {
        if (err) {
            console.log("---TodoItem save failed " + err)
        }
        console.log("+++TodoItem saved successfully "+dealJacket.dealJacketId)
        res.redirect('/')
    });
});
