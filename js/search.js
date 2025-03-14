const destinations = [
    {
        id: '1',
        location: 'Afeganistão',
        imagem: 'imgs/afeganistao.jpg',
        price: 27,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '2',
        location: 'África do Sul',
        imagem: 'imgs/africadosul.jpg',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '3',
        location: 'Albânia',
        imagem: 'imgs/albania.jpg',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '4',
        location: 'Alemanha',
        imagem: 'https://midias.eurodicas.com.br/wp-content/uploads/2024/07/tudo-sobre-a-alemanha-1-1.jpg.webp', // URL direto da imagem
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '5',
        location: 'Andorra',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '6',
        location: 'Angola',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '7',
        location: 'Antígua e Barbuda',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '8',
        location: 'Arábia Saudita',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '9',
        location: 'Argélia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '10',
        location: 'Argentina',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '11',
        location: 'Armênia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '12',
        location: 'Austrália',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '13',
        location: 'Áustria',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '14',
        location: 'Azerbaijão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '15',
        location: 'Bahamas',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '16',
        location: 'Bangladesh',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '17',
        location: 'Barbados',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '18',
        location: 'Bélgica',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },{
        id: '19',
        location: 'Belize',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '20',
        location: 'Benim',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '21',
        location: 'Bielorrússia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '22',
        location: 'Bolívia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '23',
        location: 'Bósnia e Herzegovina',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '24',
        location: 'Botsuana',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '25',
        location: 'Brasil',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '26',
        location: 'Brunei',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '27',
        location: 'Bulgária',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '28',
        location: 'Burkina Faso',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '29',
        location: 'Burundi',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '30',
        location: 'Butão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '31',
        location: 'Cabo Verde',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '32',
        location: 'Camarões',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '33',
        location: 'Camboja',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '34',
        location: 'Canadá',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '35',
        location: 'Catar',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '36',
        location: 'Cazaquistão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '37',
        location: 'Chade',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '38',
        location: 'Chile',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '39',
        location: 'China',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '40',
        location: 'Chipre',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '41',
        location: 'Colômbia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '42',
        location: 'Comores',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '43',
        location: 'Coreia do Norte',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '44',
        location: 'Coreia do Sul',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '45',
        location: 'Costa do Marfim',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '46',
        location: 'Costa Rica',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '47',
        location: 'Croácia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '48',
        location: 'Cuba',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '49',
        location: 'Dinamarca',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '50',
        location: 'Djibouti',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '51',
        location: 'Dominica',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '52',
        location: 'Egito',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '53',
        location: 'El Salvador',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '54',
        location: 'Emirados Árabes Unidos',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '55',
        location: 'Equador',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '56',
        location: 'Eritreia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '57',
        location: 'Escólia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '58',
        location: 'Eslováquia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '59',
        location: 'Eslovênia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '60',
        location: 'Espanha',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '61',
        location: 'Estados Unidos',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '62',
        location: 'Estônia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '63',
        location: 'Eswatini',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '64',
        location: 'Etiópia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '65',
        location: 'Fiji',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '66',
        location: 'Filipinas',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '67',
        location: 'Finlândia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '68',
        location: 'França',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '69',
        location: 'Gabão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '70',
        location: 'Gâmbia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '71',
        location: 'Gana',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '72',
        location: 'Geórgia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '73',
        location: 'Granada',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '74',
        location: 'Grécia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '75',
        location: 'Guatemala',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '76',
        location: 'Guiana',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '77',
        location: 'Guiné',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '78',
        location: 'Guiné Equatorial',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '79',
        location: 'Guiné-Bissau',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '80',
        location: 'Haiti',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '81',
        location: 'Honduras',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '82',
        location: 'Hungria',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '83',
        location: 'Iêmen',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '84',
        location: 'Ilhas Marshall',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '85',
        location: 'Ilhas Salomão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '86',
        location: 'Índia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '87',
        location: 'Indonésia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '88',
        location: 'Irã',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '89',
        location: 'Iraque',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '90',
        location: 'Irlanda',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '91',
        location: 'Islândia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '92',
        location: 'Israel',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '93',
        location: 'Itália',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '94',
        location: 'Jamaica',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '95',
        location: 'Japão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '96',
        location: 'Jordânia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '97',
        location: 'Kiribati',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '98',
        location: 'Kuwait',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '99',
        location: 'Laos',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '100',
        location: 'Lesoto',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '101',
        location: 'Letônia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '102',
        location: 'Líbano',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '103',
        location: 'Libéria',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '104',
        location: 'Líbia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '105',
        location: 'Liechtenstein',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '106',
        location: 'Lituânia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '107',
        location: 'Luxemburgo',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '108',
        location: 'Macedônia do Norte',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '109',
        location: 'Madagáscar',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '110',
        location: 'Malásia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '111',
        location: 'Malawi',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '112',
        location: 'Maldivas',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '113',
        location: 'Mali',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '114',
        location: 'Malta',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '115',
        location: 'Marrocos',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '116',
        location: 'Maurícia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '117',
        location: 'Mauritânia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '118',
        location: 'México',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '119',
        location: 'Micronésia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '120',
        location: 'Moçambique',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '121',
        location: 'Moldávia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '122',
        location: 'Mônaco',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '123',
        location: 'Mongólia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '124',
        location: 'Montenegro',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '125',
        location: 'Myanmar',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '126',
        location: 'Namíbia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '127',
        location: 'Nauru',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '128',
        location: 'Nepal',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '129',
        location: 'Nicarágua',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '130',
        location: 'Níger',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '131',
        location: 'Nigéria',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '132',
        location: 'Noruega',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '133',
        location: 'Nova Zelândia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '134',
        location: 'Omã',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '135',
        location: 'Países Baixos',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '136',
        location: 'Palau',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '137',
        location: 'Panamá',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '138',
        location: 'Papua-Nova Guiné',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '139',
        location: 'Paquistão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '140',
        location: 'Paraguai',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '141',
        location: 'Peru',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '142',
        location: 'Polônia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '143',
        location: 'Portugal',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '144',
        location: 'Quênia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '145',
        location: 'Quirguistão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '146',
        location: 'Reino Unido',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '147',
        location: 'República Centro-Africana',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '148',
        location: 'República Democrática do Congo',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '149',
        location: 'República Dominicana',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '150',
        location: 'República Tcheca',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '151',
        location: 'Romênia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '152',
        location: 'Ruanda',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '153',
        location: 'Rússia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '154',
        location: 'Samoa',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '155',
        location: 'San Marino',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '156',
        location: 'Santa Lúcia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '157',
        location: 'São Cristóvão e Névis',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '158',
        location: 'São Tomé e Príncipe',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '159',
        location: 'São Vicente e Granadinas',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '160',
        location: 'Seicheles',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '161',
        location: 'Senegal',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '162',
        location: 'Serra Leoa',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '163',
        location: 'Sérvia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '164',
        location: 'Singapura',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '165',
        location: 'Síria',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '166',
        location: 'Somália',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '167',
        location: 'Sri Lanka',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '168',
        location: 'Suazilândia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '169',
        location: 'Sudão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '170',
        location: 'Sudão do Sul',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '171',
        location: 'Suécia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '172',
        location: 'Suíça',
        imagem: 'imgs/suica.jpeg',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '173',
        location: 'Suriname',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '174',
        location: 'Tailândia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '175',
        location: 'Taiwan',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '176',
        location: 'Tajiquistão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '177',
        location: 'Tanzânia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '178',
        location: 'Timor-Leste',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '179',
        location: 'Togo',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '180',
        location: 'Tonga',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '181',
        location: 'Trinidad e Tobago',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '182',
        location: 'Tunísia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '183',
        location: 'Turcomenistão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '184',
        location: 'Turquia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '185',
        location: 'Tuvalu',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '186',
        location: 'Ucrânia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '187',
        location: 'Uganda',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '188',
        location: 'Uruguai',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '189',
        location: 'Uzbequistão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '190',
        location: 'Vanuatu',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '191',
        location: 'Vaticano',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '192',
        location: 'Venezuela',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '193',
        location: 'Vietnã',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '194',
        location: 'Zâmbia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },

    {
        id: '195',
        location: 'Zimbábue',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    }
];

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function filterDestinations() {
    const input = document.getElementById("destinationInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "";

    if (input.length === 0) {
        resultsContainer.style.display = "none";
        return;
    }

    const filteredDestinations = destinations.filter(destination =>
        destination.location.toLowerCase().startsWith(input)
    );

    if (filteredDestinations.length > 0) {
        filteredDestinations.forEach(destination => {
            const resultItem = document.createElement("div");
            resultItem.textContent = destination.location;
            resultItem.onclick = () => {
                document.getElementById("destinationInput").value = destination.location;
                resultsContainer.style.display = "none";
            };
            resultsContainer.appendChild(resultItem);
        });
        resultsContainer.style.display = "block";
    } else {
        resultsContainer.style.display = "none";
    }
}

function confirmSearch() {
    const inputValue = document.getElementById("destinationInput").value;

    const date = document.getElementById("datePicker").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const rooms = document.getElementById("rooms").value;
    const includeType = document.getElementById("includeType").value;

    if (inputValue) {
        showPopup(inputValue, date, adults, children, rooms, includeType);
    } else {
        alert("Por favor, insira um destino.");
    }
}

function showPopup(country, date, adults, children, rooms, includeType) {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupInfo = document.getElementById("popup-info");
    const popupFilters = document.getElementById("popup-filters");

    const destination = destinations.find(dest => dest.location === country);

    if (destination) {
        popupTitle.textContent = destination.location;
        popupInfo.innerHTML = `
            <img src="${destination.imagem}" alt="${destination.location}" style="width:100%; max-width:300px;"><br>
            <strong>Preço:</strong> $${destination.price}<br>
            <strong>Provedor:</strong> ${destination.provider}<br>
            <strong>Link:</strong> <a href="${destination.link}" target="_blank">${destination.link}</a><br>
            <strong>Recursos:</strong> ${destination.features.join(", ")}
        `;

        popupFilters.innerHTML = `
            <strong>Data da Viagem:</strong> ${date || "Não informado"}<br>
            <strong>Adultos:</strong> ${adults}<br>
            <strong>Crianças:</strong> ${children}<br>
            <strong>Quartos:</strong> ${rooms}<br>
            <strong>Incluir:</strong> ${includeType}<br>
        `;

        popup.style.display = "flex";
    } else {
        alert("Destino não encontrado.");
    }
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}