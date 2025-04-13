import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const craftVillages = [
  {
    id: 'coconut-candy',
    name: 'Làng nghề kẹo dừa',
    description: 'Làng nghề kẹo dừa là một trong những làng nghề truyền thống nổi tiếng của Bến Tre. Kẹo dừa được làm từ nguyên liệu chính là nước cốt dừa, đường, mạch nha và một số phụ liệu khác, có vị ngọt, béo, thơm mùi dừa và dẻo.',
    image: 'https://images.foody.vn/res/g4/32358/prof/s576x330/foody-mobile-1-jpg-946-635756917789878422.jpg',
    products: ['Kẹo dừa truyền thống', 'Kẹo dừa sầu riêng', 'Kẹo dừa dứa', 'Kẹo dừa cacao'],
    location: 'Huyện Châu Thành, Bến Tre'
  },
  {
    id: 'coconut-shell-craft',
    name: 'Làng nghề chế tác gáo dừa',
    description: 'Làng nghề chế tác gáo dừa sử dụng vỏ quả dừa khô để chế tác thành các sản phẩm thủ công mỹ nghệ đẹp mắt, tinh xảo như chén, đĩa, muỗng, đồ trang trí, v.v.',
    image: 'https://cdn.vietnambiz.vn/2019/11/19/hinh-13-thao-nghiep-gao-dua-15741339731421979573954.jpg',
    products: ['Tô chén gáo dừa', 'Đồ thủ công mỹ nghệ từ gáo dừa', 'Đồ lưu niệm từ gáo dừa'],
    location: 'Huyện Giồng Trôm, Bến Tre'
  },
  {
    id: 'coconut-weaving',
    name: 'Làng nghề đan lát từ lá dừa',
    description: 'Làng nghề đan lát từ lá dừa sử dụng lá dừa khô để đan thành các sản phẩm như nón, giỏ, túi xách, chiếu, v.v.',
    image: 'https://ximangcampha.vn/upload/images/dan-lat-tu-la-dua.jpg',
    products: ['Nón lá dừa', 'Giỏ đan từ lá dừa', 'Túi xách từ lá dừa', 'Chiếu từ lá dừa'],
    location: 'Huyện Mỏ Cày Nam, Bến Tre'
  },
  {
    id: 'coconut-fiber-craft',
    name: 'Làng nghề xơ dừa',
    description: 'Làng nghề xơ dừa sử dụng xơ dừa để chế tác thành các sản phẩm như thảm, chổi, dây thừng, vật liệu đệm, v.v.',
    image: 'https://langnghetruyenthong.com/hinh/site_conent/langnghe/so%20dua%20ben%20tre%20(15).jpg',
    products: ['Thảm xơ dừa', 'Chổi xơ dừa', 'Dây thừng xơ dừa', 'Vật liệu đệm từ xơ dừa'],
    location: 'Huyện Ba Tri, Bến Tre'
  },
  {
    id: 'coconut-oil',
    name: 'Làng nghề dầu dừa',
    description: 'Làng nghề dầu dừa sử dụng cơm dừa khô để ép lấy dầu, sản xuất ra các sản phẩm dầu dừa nguyên chất được sử dụng trong nấu ăn, làm đẹp và chăm sóc sức khỏe.',
    image: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/01/14/dau-dua-nguyen-chat-ky-nam-2-1610607910485.jpg',
    products: ['Dầu dừa nguyên chất', 'Dầu dừa thảo dược', 'Mỹ phẩm từ dầu dừa'],
    location: 'Huyện Giồng Trôm, Bến Tre'
  },
  {
    id: 'coconut-charcoal',
    name: 'Làng nghề than thiêu kết',
    description: 'Làng nghề than thiêu kết sử dụng vỏ quả dừa khô để sản xuất ra than hoạt tính, than nướng BBQ, than thơm, v.v.',
    image: 'https://image-us.eva.vn/upload/2-2021/images/2021-06-26/1624683304-19c10e7c6b1b29f4a12bcdee9e2704c8.jpg',
    products: ['Than hoạt tính từ vỏ dừa', 'Than nướng BBQ', 'Than thơm'],
    location: 'Huyện Mỏ Cày Bắc, Bến Tre'
  },
  {
    id: 'rice-paper',
    name: 'Làng nghề bánh tráng',
    description: 'Làng nghề bánh tráng truyền thống sản xuất các loại bánh tráng với công thức đặc biệt của địa phương.',
    image: 'https://statics.vinpearl.com/banh-trang-tron-ben-tre-02_1633252174.jpg',
    products: ['Bánh tráng truyền thống', 'Bánh tráng dừa', 'Bánh tráng mè'],
    location: 'Huyện Châu Thành, Bến Tre'
  },
]

// Categories for filter
const categories = [
  { id: 'all', name: 'Tất cả làng nghề' },
  { id: 'coconut', name: 'Làng nghề liên quan đến dừa' },
  { id: 'food', name: 'Làng nghề thực phẩm' },
  { id: 'handicraft', name: 'Làng nghề thủ công mỹ nghệ' },
]

export default function CraftVillages() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [selectedVillage, setSelectedVillage] = useState(null)
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <Layout>
      {/* Hero Section - Gold theme */}
      <section className="relative h-screen overflow-hidden">
        {/* Background with gold accent */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://nld.mediacdn.vn/291774122806476800/2021/9/29/ben-tre-16329293501372075972975.jpg)',
              filter: 'brightness(0.5) contrast(1.2) saturate(1.2)',
            }}
          />
          
          {/* Gold overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-amber-700/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
          
          {/* Particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-amber-300/10"
                style={{
                  width: Math.random() * 80 + 20,
                  height: Math.random() * 80 + 20,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px bg-amber-400 mb-6 hidden lg:block"
              ></motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-amber-300 text-sm tracking-[0.5em] uppercase mb-4 font-light"
              >
                KHÁM PHÁ
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-5xl md:text-7xl font-extralight mb-6 text-white"
              >
                Làng Nghề <br />
                <span className="text-amber-200">Truyền Thống</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-gray-300 font-light text-lg max-w-xl mx-auto lg:mx-0"
              >
                Khám phá không gian văn hóa đặc sắc và những kỹ thuật tinh xảo được gìn giữ qua nhiều thế hệ tại các làng nghề truyền thống Bến Tre.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="mt-8"
              >
                <button className="px-6 py-3 bg-amber-700 text-white rounded-sm hover:bg-amber-600 transition-colors duration-300 font-light tracking-wider relative overflow-hidden group">
                  <span className="relative z-10">KHÁM PHÁ NGAY</span>
                  <motion.div 
                    className="absolute inset-0 bg-amber-500"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                  ></motion.div>
                </button>
              </motion.div>
            </motion.div>
            
            {/* Decorative image grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="relative hidden lg:block h-[500px]"
            >
              <div className="relative h-full w-full grid grid-cols-2 grid-rows-2 gap-4">
                <div className="absolute w-40 h-40 rounded-full bg-amber-800/30 blur-3xl -top-20 -right-10 z-0"></div>
                <div className="absolute w-40 h-40 rounded-full bg-amber-800/30 blur-3xl -bottom-10 -left-20 z-0"></div>
                
                <div className="relative row-span-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <Image
                    src="https://vietnamtimes.org.vn/stores/news_dataimages/phuonglyvnt/032020/06/14/in_article/5021_lang_nghe_the_san_so_da_ben_tre.jpg"
                    alt="Handcraft"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <Image
                    src="https://static.vinwonders.com/2023/03/cong-nghe-lam-keo-dua-ben-tre-1.jpg"
                    alt="Traditional craft"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <Image
                    src="https://ben-tre.gov.vn/Uploadfiles/2019/4/16/t5.jpg"
                    alt="Craft products"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="text-amber-300 text-xs tracking-[0.3em] font-light flex flex-col items-center">
            <span>CUỘN XUỐNG</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-12 w-[1px] bg-amber-500/50 mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-amber-900/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-amber-900/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light"
            >
              TINH HOA
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-light mb-8 tracking-wide text-white"
            >
              Nghề <span className="text-amber-300">Truyền Thống</span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-px bg-amber-400/50 mx-auto mb-8"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 font-light leading-relaxed text-lg"
            >
              Bến Tre là vùng đất nổi tiếng với các làng nghề truyền thống, nơi lưu giữ và phát triển những giá trị văn hóa độc đáo. Mỗi làng nghề đều có những sản phẩm tiêu biểu riêng, thể hiện tài năng và sự sáng tạo của người dân địa phương.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-light tracking-wider transition-all duration-300 border ${
                  activeCategory.id === category.id
                    ? 'bg-amber-800 text-white border-amber-700'
                    : 'bg-transparent text-gray-300 border-gray-700 hover:border-amber-500 hover:text-amber-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Villages Grid - Modern staggered grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftVillages.map((village, index) => (
              <motion.div
                key={village.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => setSelectedVillage(village)}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
                className={`group cursor-pointer bg-gray-900 overflow-hidden border border-gray-800 ${hoverIndex === index ? 'ring-2 ring-amber-500' : ''}`}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={village.image}
                    alt={village.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 relative">
                  {/* Gold accent line - grows on hover */}
                  <div className="absolute top-0 left-0 h-[2px] bg-amber-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  
                  <h3 className="text-xl font-light mb-3 text-white group-hover:text-amber-200 transition-colors">
                    {village.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {village.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-amber-400">{village.location}</span>
                    <span className="text-gray-300 text-sm font-light flex items-center">
                      <span className="mr-1">Xem chi tiết</span>
                      <svg 
                        className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Detail Modal */}
      {selectedVillage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setSelectedVillage(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-full min-h-[300px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${selectedVillage.image})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10">
                <p className="text-amber-400 text-sm tracking-wider uppercase mb-2 font-light">
                  LÀNG NGHỀ
                </p>
                
                <h2 className="text-3xl font-light mb-6 text-white">
                  {selectedVillage.name}
                </h2>
                
                <div className="w-16 h-px bg-amber-500/40 mb-6"></div>
                
                <p className="text-gray-300 mb-8 leading-relaxed font-light">
                  {selectedVillage.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-light mb-4 text-white">
                    <span className="text-amber-300">⊹</span> Sản phẩm tiêu biểu
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedVillage.products.map((product, index) => (
                      <div 
                        key={index} 
                        className="flex items-center text-gray-300 bg-gray-800/50 p-2 text-sm"
                      >
                        <div className="w-1 h-1 rounded-full bg-amber-400 mr-2"></div>
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400 font-light">{selectedVillage.location}</span>
                </div>
                
                <button
                  className="mt-4 w-full border border-amber-500 text-amber-300 hover:bg-amber-900/20 px-6 py-3 transition-colors font-light tracking-wider flex items-center justify-center"
                >
                  <span>ĐẶT LỊCH THAM QUAN</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-cover bg-center filter grayscale" 
            style={{
              backgroundImage: 'url(https://media.mia.vn/uploads/blog-du-lich/dac-san-ben-tre-11-1637570358.jpg)',
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light"
            >
              TRẢI NGHIỆM
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-light mb-6 text-white"
            >
              Khám phá <span className="text-amber-300">làng nghề</span> cùng chúng tôi
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
            >
              Hãy để chúng tôi giúp bạn lên kế hoạch cho chuyến tham quan các làng nghề truyền thống tại Bến Tre. Trải nghiệm không gian văn hóa độc đáo và thử làm những sản phẩm thủ công truyền thống.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block overflow-hidden group"
            >
              <button className="px-8 py-4 bg-amber-700 text-white font-light tracking-wider relative overflow-hidden group transition-all duration-300">
                <span className="relative z-10">LIÊN HỆ NGAY</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                ></motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}