import { SocialDialogComponent } from './../social-dialog/social-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataInterface } from '../../interfaces/dialog-data.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socialConfigs!: DialogDataInterface;

  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}

  defineCorrectSocialMediaInfo(socialOption: string) {
    switch (socialOption) {
      case 'instagram':
        this.socialConfigs = {
          logoPath: '../../../../../assets/img/instagram.png',
          socialMediaName: 'Instagram',
          alternativeText: 'Logo do Instagram',
          leticiaLink: 'https://www.instagram.com/startnowleticia/',
          mikaelLink: 'https://www.instagram.com/musneyer/',
        };
        break;

      case 'linkedin':
        this.socialConfigs = {
          logoPath: '../../../../../assets/img/linkedin.png',
          socialMediaName: 'Linkedin',
          alternativeText: 'Logo do Linkedin',
          leticiaLink: 'https://www.linkedin.com/in/leticia-dia/',
          mikaelLink: 'https://www.linkedin.com/in/mikael-ribeiro/',
        };
        break;

      case 'github':
        this.socialConfigs = {
          logoPath: '../../../../../assets/img/github.png',
          socialMediaName: 'Github',
          alternativeText: 'Logo do Github',
          leticiaLink: 'https://github.com/leticiadia',
          mikaelLink: 'https://github.com/Mikkaiser',
        };
        break;
    }
  }

  openDialog(socialOption: string): void {
    this.defineCorrectSocialMediaInfo(socialOption);

    const dialogRef = this.dialog.open(SocialDialogComponent, {
      width: '500px',
      data: this.socialConfigs,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
