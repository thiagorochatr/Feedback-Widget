import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// Spies = espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should de able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64dwdiawdiandskdd',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not de able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64dwdiawdiandskdd',
    })).rejects.toThrow();
  });

  it('should not de able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64dwdiawdiandskdd',
    })).rejects.toThrow();
  });

  it('should not de able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data/png;base64dwdiawdiandskdd',
    })).rejects.toThrow();
  });
});