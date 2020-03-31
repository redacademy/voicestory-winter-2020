import React from 'react';
import {ScrollView} from 'react-native';
import Collapsible from '../../components/Collapsible';

const FAQ = () => {
  return (
    <ScrollView>
      <Collapsible
        title="What happens after I apply to speak for a show?"
        description={`We will contact you to schedule a call with a Story Architect, to go over your application and answer any questions you have about the show.
        
        \nThe Story Architect may request that you submit a video recording of your story for review.`}
      />
      <Collapsible
        title="Something came up! Can I reschedule my call with the Story Architect?"
        description={`We understand that life happens and in consideration of all the other applicants in the submission queue, we will only allow you to reschedule your call with the Story Architect once.`}
      />
      <Collapsible
        title="What happens if I miss my scheduled call?"
        description={`If you miss your scheduled call your application will be void and you will be removed from consideration for the theme you applied for.`}
      />
      <Collapsible
        title="When will I know if I was selected to speak?"
        description={`We process all submissions in the order that they are received and try to review them within 72 hours, however, this timeframe can vary due to the number of applications we receive.

        \nIf a show that you have applied for becomes full, we will update you as soon as possible.
        
        \nIf there is a speaker opening available, and if a requested video submission is approved, we will send you an invitation to speak for that show.`}
      />
      <Collapsible
        title="How long do I have to submit a video for review?"
        description={`If the Story Architect requests a video recording of the story you wish to share, you have 10 days to submit a video for review.`}
      />
      <Collapsible
        title="What tips can you provide to ensure I record a good video submission?"
        description={`We are not expecting a professionally recorded and edited video.

        \nOur value of inclusiveness is designed to ensure non-professional speakers have an oppourtunity to share their story. So a recording using your cell phone, laptop, webcam is perfectly fine and please keep the following tips in mind:
        
        \nImagine that you are recording a video for an audition (because you are).
        
        \nBe in a quiet setting to minimize any noise (example: music, tv, kids, pets, people speaking in the background) that would distract the reviewer from the story that you are sharing, or make it difficult to hear you speak.`}
      />
      <Collapsible
        title="What is your video submission review process?"
        description={`Videos are reviewed in the sequence they are received and invitations are given based on the approval of your submission and available spots (subject to inclusiveness, diversity and variety).

        \nWe have chosen to use a “traffic light” system to review all video submissions as follows:
        
        \ngreen light = video submission is OK
        
        \nyellow light = feedback given
        a) video resubmission #1
             a1) green light = video submission is OK
             a2) feedback given
                  b) video submission #2
                       b1) green light = video submission is OK
                       b2) red light = video submission is not approved
        
        \nred light = submitted video needs a lot of work, feedback is provided and resources suggested. The Applicant will not be considered for a period of 6 months from the review date.`}
      />
      <Collapsible
        title="Why this 6 month period?"
        description={`We believe there is a story to be told within you, however, there is work that we feel needs to be done to improve story structure, intention and delivery. All of this takes time and rushing this foundation work would be a mistake.`}
      />
      <Collapsible
        title="Does receiving a “red light” result for my submission impact future applications to speak?"
        description={`The “red light” result is not meant to be punitive.

        \nIt is meant to bring to your awareness, and provide the space required, to work on the skills, the story or both. If this “work” did not happen then it will be apparent in the next video submission. There is no permanent record, aka “blacklisted”, associated with you which would inhibit your ability to apply to speak at a future show.`}
      />
    </ScrollView>
  );
};

export default FAQ;
