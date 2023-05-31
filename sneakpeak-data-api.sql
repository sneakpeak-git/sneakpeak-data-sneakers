CREATE TABLE `sneakers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`brand` varchar(20) NOT NULL,
	`model` varchar(30) NOT NULL,
	`name` varchar(30) NOT NULL,
	`color` varchar(30) NOT NULL,
	`release_date` DATE NOT NULL,
	`description` TEXT NOT NULL,
	`extra` varchar(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `images` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `sneaker_id` INT,
    `link` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`sneaker_id`) REFERENCES `sneakers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_sneaker_id` FOREIGN KEY (`sneaker_id`) REFERENCES `sneakers`(`id`)
);


--Sample items
insert into sneakers values(0, "Nike", "315122-111/CW2288-111", "Nike Air Force 1 Low 07", "White", "2007-11-24", "The Nike Air Force 1 Low White ‘07 features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole completes the design. The Nike Air Force 1 Low White ‘07 originally released in 2007, but since it is an essential colorway to the brand, it consistently restocks.", "Comes with 2X Af1 Branded Lace Dubrae (Attached)");
insert into sneakers values(0, "Jordan", "DV1748-601", "Jordan 1 High OG", "University Red/Black/White", "2023-05-20", "Nike and Jordan Brand are returning back to the Spider-Verse for their second Spider-Man themed Air Jordan 1, with the release of the Air Jordan 1 High OG Spider-Man Across the Spider-Verse. Also known as the Next Chapter, the Jordan 1 High OG Spider-Man Across the Spider-Verse is the next iteration of the original Air Jordan 1 Chicago colorway. The limited edition sneakers are constructed using various leathers, suedes, and other premium materials across the uppers. The patterns used across the sneakers are designed to mimic the Miles Morales/Spider-Man animation style. ", null);
insert into images values(null, 1, 'https://imgur.com/fKxkbIS');
insert into images values(null, 2, 'https://i.imgur.com/VuFEMWU.png');
insert into images values(null, 2, 'https://i.imgur.com/4Qbghpv.png');
insert into images values(null, 2, 'https://i.imgur.com/c7ASyEw.png');
