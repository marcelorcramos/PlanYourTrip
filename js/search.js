const destinations = [
    {
        id: '1',
        location: 'Afeganistão',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '2',
        location: 'África do Sul',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '3',
        location: 'Albânia',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '4',
        location: 'Alemanha',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
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
        location: 'Chipre',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '58',
        location: 'Chipre',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '59',
        location: 'Chipre',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Fgeografia%2Fafeganistao.htm&psig=AOvVaw0ZbGRcUO1Ro4mmDF2M1QdC&ust=1741989848988000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDNsYqIiIwDFQAAAAAdAAAAABAE',
        price: 120,
        provider: 'Booking.com',
        link: 'https://www.booking.com',
        features: ['Free cancellation', 'Breakfast included', 'Swimming pool']
    },
    {
        id: '60',
        location: 'Chipre',
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
    "Colômbia", "Comores", "Coreia do Norte", "Coreia do Sul", "Costa do Marfim", 
    "Costa Rica", "Croácia", "Cuba", "Dinamarca", "Djibouti", "Dominica", "Egito", "El Salvador", 
    "Emirados Árabes Unidos", "Equador", "Eritreia", "Escólia", "Eslováquia", "Eslovênia", "Espanha", 
    "Estados Unidos", "Estônia", "Eswatini", "Etiópia", "Fiji", "Filipinas", "Finlândia", "França", 
    "Gabão", "Gâmbia", "Gana", "Geórgia", "Granada", "Grécia", "Guatemala", "Guiana", "Guiné", 
    "Guiné Equatorial", "Guiné-Bissau", "Haiti", "Honduras", "Hungria", "Iêmen", "Ilhas Marshall", 
    "Ilhas Salomão", "Índia", "Indonésia", "Irã", "Iraque", "Irlanda", "Islândia", "Israel", "Itália", 
    "Jamaica", "Japão", "Jordânia", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letônia", "Líbano", 
    "Libéria", "Líbia", "Liechtenstein", "Lituânia", "Luxemburgo", "Macedônia do Norte", "Madagáscar", 
    "Malásia", "Malawi", "Maldivas", "Mali", "Malta", "Marrocos", "Maurícia", "Mauritânia", "México", 
    "Micronésia", "Moçambique", "Moldávia", "Mônaco", "Mongólia", "Montenegro", "Myanmar", "Namíbia", 
    "Nauru", "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", "Nova Zelândia", "Omã", "Países Baixos", 
    "Palau", "Panamá", "Papua-Nova Guiné", "Paquistão", "Paraguai", "Peru", "Polônia", "Portugal", 
    "Quênia", "Quirguistão", "Reino Unido", "República Centro-Africana", "República Democrática do Congo", 
    "República Dominicana", "República Tcheca", "Romênia", "Ruanda", "Rússia", "Samoa", "San Marino", 
    "Santa Lúcia", "São Cristóvão e Névis", "São Tomé e Príncipe", "São Vicente e Granadinas", "Seicheles", 
    "Senegal", "Serra Leoa", "Sérvia", "Singapura", "Síria", "Somália", "Sri Lanka", "Suazilândia", 
    "Sudão", "Sudão do Sul", "Suécia", "Suíça", "Suriname", "Tailândia", "Taiwan", "Tajiquistão", 
    "Tanzânia", "Timor-Leste", "Togo", "Tonga", "Trinidad e Tobago", "Tunísia", "Turcomenistão", 
    "Turquia", "Tuvalu", "Ucrânia", "Uganda", "Uruguai", "Uzbequistão", "Vanuatu", "Vaticano", 
    "Venezuela", "Vietnã", "Zâmbia", "Zimbábue"
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
        destination.toLowerCase().startsWith(input)
    );

    if (filteredDestinations.length > 0) {
        filteredDestinations.forEach(destination => {
            const resultItem = document.createElement("div");
            resultItem.textContent = destination;
            resultItem.onclick = () => {
                document.getElementById("destinationInput").value = destination;
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

    popupTitle.textContent = country;
    popupInfo.textContent = `Informações sobre ${country}. Aqui você pode adicionar detalhes específicos sobre o país.`;

    popupFilters.innerHTML = `
        <strong>Data da Viagem:</strong> ${date || "Não informado"}<br>
        <strong>Adultos:</strong> ${adults}<br>
        <strong>Crianças:</strong> ${children}<br>
        <strong>Quartos:</strong> ${rooms}<br>
        <strong>Incluir:</strong> ${includeType}<br>
    `;

    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}