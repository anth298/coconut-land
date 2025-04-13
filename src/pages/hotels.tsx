import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

const hotels = [
  {
    name: 'Khách sạn Bến Tre',
    description: 'Khách sạn 3 sao nằm ở trung tâm thành phố, gần các điểm du lịch và trung tâm thương mại. Phòng ốc hiện đại, tiện nghi với view đẹp ra sông.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Khách+sạn+Bến+Tre',
    location: 'Thành phố Bến Tre',
    price: '500,000 - 1,500,000đ/đêm',
    amenities: ['WiFi miễn phí', 'Bể bơi', 'Nhà hàng', 'Bãi đỗ xe', 'Dịch vụ spa'],
    rating: 4.5,
    contact: {
      phone: '(0275) 123456',
      email: 'info@bentretourism.com',
      address: '123 Đường ABC, Thành phố Bến Tre',
    },
  },
  {
    name: 'Resort Cồn Sơn',
    description: 'Resort 4 sao nằm trên Cồn Sơn, được bao quanh bởi vườn cây ăn trái và sông nước. Phòng ốc thiết kế theo phong cách miền Tây Nam Bộ.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Resort+Cồn+Sơn',
    location: 'Cồn Sơn, Thành phố Bến Tre',
    price: '1,000,000 - 2,500,000đ/đêm',
    amenities: ['WiFi miễn phí', 'Bể bơi', 'Nhà hàng', 'Bãi đỗ xe', 'Dịch vụ spa', 'Tour du lịch'],
    rating: 4.8,
    contact: {
      phone: '(0275) 234567',
      email: 'info@consontourism.com',
      address: 'Cồn Sơn, Thành phố Bến Tre',
    },
  },
  {
    name: 'Homestay Cồn Phú',
    description: 'Homestay nằm trên Cồn Phú, được thiết kế theo phong cách nhà vườn miền Tây. Du khách có thể trải nghiệm cuộc sống địa phương và thưởng thức ẩm thực đặc sản.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Homestay+Cồn+Phú',
    location: 'Cồn Phú, Huyện Châu Thành',
    price: '300,000 - 800,000đ/đêm',
    amenities: ['WiFi miễn phí', 'Bãi đỗ xe', 'Tour du lịch', 'Ăn sáng miễn phí'],
    rating: 4.2,
    contact: {
      phone: '(0275) 345678',
      email: 'info@conphutourism.com',
      address: 'Cồn Phú, Huyện Châu Thành',
    },
  },
  {
    name: 'Khách sạn Sông Tiền',
    description: 'Khách sạn 3 sao nằm bên bờ sông Tiền, có view đẹp ra sông và thành phố. Phòng ốc hiện đại, tiện nghi với các dịch vụ đầy đủ.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Khách+sạn+Sông+Tiền',
    location: 'Thành phố Bến Tre',
    price: '400,000 - 1,200,000đ/đêm',
    amenities: ['WiFi miễn phí', 'Bể bơi', 'Nhà hàng', 'Bãi đỗ xe', 'Dịch vụ spa'],
    rating: 4.3,
    contact: {
      phone: '(0275) 456789',
      email: 'info@songtientourism.com',
      address: '456 Đường XYZ, Thành phố Bến Tre',
    },
  },
  {
    name: 'Resort Cồn Bửng',
    description: 'Resort 4 sao nằm trên Cồn Bửng, được bao quanh bởi vườn cây ăn trái và sông nước. Phòng ốc thiết kế theo phong cách miền Tây Nam Bộ.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Resort+Cồn+Bửng',
    location: 'Cồn Bửng, Huyện Chợ Lách',
    price: '900,000 - 2,000,000đ/đêm',
    amenities: ['WiFi miễn phí', 'Bể bơi', 'Nhà hàng', 'Bãi đỗ xe', 'Dịch vụ spa', 'Tour du lịch'],
    rating: 4.6,
    contact: {
      phone: '(0275) 567890',
      email: 'info@conbungtourism.com',
      address: 'Cồn Bửng, Huyện Chợ Lách',
    },
  },
  {
    name: 'Homestay Cồn Thành',
    description: 'Homestay nằm trên Cồn Thành, được thiết kế theo phong cách nhà vườn miền Tây. Du khách có thể trải nghiệm cuộc sống địa phương và thưởng thức ẩm thực đặc sản.',
    image: 'https://placehold.co/600x400/c0a46d/FFFFFF/png?text=Homestay+Cồn+Thành',
    location: 'Cồn Thành, Huyện Mỏ Cày Nam',
    price: '250,000 - 600,000đ/đêm',
    amenities: ['WiFi miễn phí', 'Bãi đỗ xe', 'Tour du lịch', 'Ăn sáng miễn phí'],
    rating: 4.1,
    contact: {
      phone: '(0275) 678901',
      email: 'info@conthanhtourism.com',
      address: 'Cồn Thành, Huyện Mỏ Cày Nam',
    },
  },
]

export default function Hotels() {
  const router = useRouter()
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://placehold.co/1920x1080/c0a46d/FFFFFF/png?text=Khách+sạn+Bến+Tre) no-repeat center center/cover'
            }}
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-light text-amber-300">
              KHÁM PHÁ
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6">
              Khách sạn & Nơi lưu trú
            </h1>
            <p className="text-lg md:text-xl font-light">
              Trải nghiệm nghỉ dưỡng tuyệt vời tại Bến Tre
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={`${hotel.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800 hover:border-amber-700/50 transition-all duration-300"
              >
                <div 
                  className="relative h-48"
                  style={{
                    backgroundImage: `url(${hotel.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-amber-700/80 text-white text-xs px-3 py-1 rounded-sm">
                      {hotel.location}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-light text-white">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-amber-500">★</span>
                      <span className="ml-1 text-amber-300">
                        {hotel.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 font-light">
                    {hotel.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-light text-white mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        Giá phòng
                      </h4>
                      <p className="text-amber-300 ml-6">{hotel.price}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        Tiện nghi
                      </h4>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {hotel.amenities.slice(0, 3).map((amenity) => (
                          <span key={amenity} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                        {hotel.amenities.length > 3 && (
                          <span className="text-xs bg-gray-800 text-amber-300 px-3 py-1 rounded-full">
                            +{hotel.amenities.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2 flex items-center">
                        <span className="text-amber-500 mr-2">•</span>
                        Liên hệ
                      </h4>
                      <div className="text-gray-300 ml-6 font-light">
                        <p>{hotel.contact.phone}</p>
                        <p className="text-amber-300/80">{hotel.contact.email}</p>
                      </div>
                    </div>
                    <button className="w-full mt-4 py-3 bg-transparent border border-amber-600 text-amber-400 hover:bg-amber-900/30 transition-colors duration-300 font-light tracking-wide">
                      ĐẶT PHÒNG NGAY
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
} 