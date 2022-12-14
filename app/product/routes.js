const router = require(`express`).Router();
const multer = require(`multer`);
const upload = multer({dest: `uploads`});
const product_Controller = require(`./controller`);


router.get(`/product`, product_Controller.index);

router.get(`/product/:id`, product_Controller.view);

router.post(`/product`, upload.single('image'), product_Controller.store);

router.put(`/product/:id`, upload.single('image'), product_Controller.update);

router.delete(`/product/:id`, product_Controller.destroy);

module.exports= router;