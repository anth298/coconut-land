import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'

const attractions = [
  {
    name: 'Cồn Sơn',
    description: 'Cồn Sơn là một hòn đảo nhỏ nằm giữa sông Tiền, nổi tiếng với vườn cây ăn trái sum suê và các làng nghề truyền thống. Du khách có thể tham quan vườn cây, thưởng thức trái cây tươi và mua sắm đặc sản địa phương.',
    image: 'https://cdn3.ivivu.com/2022/07/C%C3%B4n-Ph%E1%BB%A5ng-B%E1%BA%BFn-Tre-ivivu-1.jpg',
    location: 'Thành phố Bến Tre',
    activities: ['Tham quan vườn cây ăn trái', 'Đi xe đạp', 'Chèo thuyền', 'Thưởng thức trái cây'],
    bestTime: 'Mùa trái cây (tháng 5-8)',
    price: 'Miễn phí tham quan, chi phí ăn uống và mua sắm tùy chọn',
  },
  {
    name: 'Cồn Phú',
    description: 'Cồn Phú là một hòn đảo nổi tiếng với vườn dừa xanh mướt và các làng nghề truyền thống. Du khách có thể tham quan vườn dừa, học cách làm kẹo dừa và thưởng thức các món ăn đặc sản.',
    image: 'https://cdn3.ivivu.com/2022/07/C%E1%BB%93n-Ph%C3%BAng-B%E1%BA%BFn-Tre-ivivu-3.jpg',
    location: 'Huyện Châu Thành',
    activities: ['Tham quan vườn dừa', 'Học làm kẹo dừa', 'Đi xe đạp', 'Thưởng thức đặc sản'],
    bestTime: 'Quanh năm',
    price: 'Miễn phí tham quan, chi phí ăn uống và mua sắm tùy chọn',
  },
  {
    name: 'Cồn Bửng',
    description: 'Cồn Bửng là một hòn đảo nổi tiếng với vườn cây ăn trái và các làng nghề truyền thống. Du khách có thể tham quan vườn cây, thưởng thức trái cây tươi và mua sắm đặc sản địa phương.',
    image: 'https://dulichbentre.com.vn/wp-content/uploads/2020/06/kinh-nghiem-du-lich-ben-tre-ivivu-1.jpg',
    location: 'Huyện Chợ Lách',
    activities: ['Tham quan vườn cây ăn trái', 'Đi xe đạp', 'Chèo thuyền', 'Thưởng thức trái cây'],
    bestTime: 'Mùa trái cây (tháng 5-8)',
    price: 'Miễn phí tham quan, chi phí ăn uống và mua sắm tùy chọn',
  },
  {
    name: 'Cồn Thành',
    description: 'Cồn Thành là một hòn đảo nổi tiếng với vườn dừa xanh mướt và các làng nghề truyền thống. Du khách có thể tham quan vườn dừa, học cách làm kẹo dừa và thưởng thức các món ăn đặc sản.',
    image: 'https://cdn.tgdd.vn/Files/2021/06/25/1362652/du-lich-ben-tre-tu-a-z-kinh-nghiem-dia-diem-an-uong-luu-tru-202106251048389718.jpg',
    location: 'Huyện Mỏ Cày Nam',
    activities: ['Tham quan vườn dừa', 'Học làm kẹo dừa', 'Đi xe đạp', 'Thưởng thức đặc sản'],
    bestTime: 'Quanh năm',
    price: 'Miễn phí tham quan, chi phí ăn uống và mua sắm tùy chọn',
  },
  {
    name: 'Cồn Ngang',
    description: 'Cồn Ngang là một hòn đảo nổi tiếng với vườn cây ăn trái và các làng nghề truyền thống. Du khách có thể tham quan vườn cây, thưởng thức trái cây tươi và mua sắm đặc sản địa phương.',
    image: 'https://cdn.tgdd.vn/Files/2021/06/25/1362652/du-lich-ben-tre-tu-a-z-kinh-nghiem-dia-diem-an-uong-luu-tru-202106251048384872.jpg',
    location: 'Huyện Mỏ Cày Bắc',
    activities: ['Tham quan vườn cây ăn trái', 'Đi xe đạp', 'Chèo thuyền', 'Thưởng thức trái cây'],
    bestTime: 'Mùa trái cây (tháng 5-8)',
    price: 'Miễn phí tham quan, chi phí ăn uống và mua sắm tùy chọn',
  },
  {
    name: 'Cồn Thành 2',
    description: 'Cồn Thành là một hòn đảo nổi tiếng với vườn dừa xanh mướt và các làng nghề truyền thống. Du khách có thể tham quan vườn dừa, học cách làm kẹo dừa và thưởng thức các món ăn đặc sản.',
    image: 'https://cdn.tgdd.vn/Files/2021/06/25/1362652/du-lich-ben-tre-tu-a-z-kinh-nghiem-dia-diem-an-uong-luu-tru-202106251048395018.jpg',
    location: 'Huyện Giồng Trôm',
    activities: ['Tham quan vườn dừa', 'Học làm kẹo dừa', 'Đi xe đạp', 'Thưởng thức đặc sản'],
    bestTime: 'Quanh năm',
    price: 'Miễn phí tham quan, chi phí ăn uống và mua sắm tùy chọn',
  },
]

export default function Tourism() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredCard, setHoveredCard] = useState(null)
  
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'island', name: 'Cồn đảo' },
    { id: 'eco', name: 'Sinh thái' },
    { id: 'culture', name: 'Văn hóa' }
  ]
  
  return (
    <Layout>
      {/* Hero Section - Full width trang phụ style */}
      <section className="relative min-h-screen">
        {/* 3D Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              backgroundImage: `url(https://image.sggp.org.vn/w1200/Uploaded/2024/crnwcqjwp/2022_04_25/ben-tre-1_PFBL.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.5) contrast(1.2) saturate(1.1)',
            }}
          />
          
          {/* Mesh gradients overlay - Điểm nhấn khác với trang chính */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-amber-700/40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
          
          {/* Hero content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "70px" }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="h-px bg-amber-400 mb-6"
                    ></motion.div>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light"
                    >
                      KHÁM PHÁ
                    </motion.p>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="text-5xl md:text-7xl font-light tracking-wide text-white mb-6"
                    >
                      Du lịch <br/>
                      <span className="text-amber-300 italic">Bến Tre</span>
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                      className="text-gray-300 font-light text-lg md:text-xl mb-10 max-w-md"
                    >
                      Đắm mình trong hành trình khám phá vẻ đẹp hoang sơ của miền sông nước, nơi thiên nhiên và con người hòa quyện tạo nên bức tranh Bến Tre đầy mê hoặc.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      className="flex space-x-5"
                    >
                      <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-sm relative overflow-hidden group">
                        <span className="relative z-10">Khám phá ngay</span>
                        <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      </button>
                      
                      <button className="px-6 py-3 border border-amber-400/40 text-amber-300 hover:bg-amber-900/30 rounded-sm">
                        Tour phổ biến
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Hero image with 3D effect */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="relative hidden md:block"
                >
                  <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl relative transform perspective-1000">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(https://ik.imagekit.io/tvlk/blog/2022/09/du-lich-ben-tre-2.jpg)`,
                        transformStyle: "preserve-3d",
                        transform: "translateZ(20px)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-white text-sm font-light mb-2">TOUR NỔI BẬT</p>
                      <h3 className="text-white text-2xl font-light">Khám phá cồn xanh</h3>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div 
                    className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-400/10 blur-xl"
                  ></div>
                  <div 
                    className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-400/10 blur-xl"
                  ></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col items-center"
          >
            <div className="text-amber-400/80 text-xs tracking-widest font-light mb-2">CUỘN XUỐNG</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-8 bg-amber-500/50"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction section */}
      <section className="py-20 bg-black text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-light mb-8 tracking-wide"
            >
              Cảnh sắc thiên nhiên <span className="text-amber-400">kỳ vĩ</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 font-light leading-relaxed"
            >
              Bến Tre sở hữu vẻ đẹp hoang sơ của miền sông nước, với những dòng sông uốn lượn, 
              những vườn dừa xanh mát và những cồn đảo nổi giữa dòng sông. 
              Du lịch Bến Tre mang đến cho du khách những trải nghiệm độc đáo 
              về thiên nhiên, văn hóa và con người nơi đây.
            </motion.p>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modern card layout */}
      <section className="py-20 bg-black text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {attractions.map((attraction, index) => (
              <motion.div
                key={`${attraction.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-900/20">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  
                  {/* Location tag */}
                  <div className="absolute top-5 left-5 bg-amber-700/80 text-white text-xs px-3 py-1 rounded-sm">
                    {attraction.location}
                  </div>
                  
                  {/* Content overlay - Subtle parallax effect on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-2">
                    <h3 className="text-3xl font-light text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                      {attraction.name}
                    </h3>
                    
                    <div className={`overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100`}>
                      <p className="text-gray-300 font-light mb-4 text-sm">
                        {attraction.description.substring(0, 100)}...
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {attraction.activities.slice(0, 2).map((activity, i) => (
                          <span key={i} className="text-xs bg-black/40 text-amber-300 px-3 py-1 rounded-full">
                            {activity}
                          </span>
                        ))}
                        {attraction.activities.length > 2 && (
                          <span className="text-xs bg-black/40 text-amber-300 px-3 py-1 rounded-full">
                            +{attraction.activities.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-amber-400 text-sm">{attraction.bestTime}</span>
                      <button className="text-sm text-white hover:text-amber-300 transition-colors flex items-center">
                        <span>Chi tiết</span>
                        <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'url(https://placehold.co/1920x1080/c0a46d/FFFFFF/png?text=Bến+Tre)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)'
            }}
          ></div>
        </div>
        
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-gray-900/80 via-gray-900/95 to-gray-900/80 backdrop-blur-sm p-10 md:p-16 rounded-xl shadow-2xl shadow-amber-900/20 border border-gray-800">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-light text-white mb-6"
              >
                Bắt đầu <span className="text-amber-400">hành trình</span> khám phá Bến Tre
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 font-light mb-10"
              >
                Đăng ký tour ngay hôm nay để khám phá vẻ đẹp của xứ dừa Bến Tre qua góc nhìn độc đáo 
                cùng đội ngũ hướng dẫn viên chuyên nghiệp của chúng tôi.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-sm relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-amber-700/30">
                  <span className="relative z-10 tracking-wide">ĐẶT TOUR NGAY</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 