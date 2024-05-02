import { Component } from '@angular/core';
import { MarkdownEditorComponent } from '../markdown-editor/markdown-editor.component';
import { FormsModule } from '@angular/forms';
import { MarkdownWithAIService } from '../../services/markdown-with-ai.service';
import { AIMarkdown } from '../../interfaces/AImarkdown';
@Component({
  selector: 'app-markdown-with-ai',
  standalone: true,
  imports: [MarkdownEditorComponent, FormsModule],
  templateUrl: './markdown-with-ai.component.html',
  styleUrl: './markdown-with-ai.component.sass',
})
export class MarkdownWithAiComponent {
  constructor(private MarkdownWithAIService: MarkdownWithAIService) {}
  markdown: AIMarkdown = { text: '' };
  valeurInput: string = '';
  generateMarkdown() {
    this.MarkdownWithAIService.generate(this.valeurInput).subscribe((md) => {
      this.markdown = md;
    });
  }
  ngonInit(): void {
    this.generateMarkdown();
  }
}
